from rest_framework import serializers
from .models import Product, ProductImage, ProductSize


class ProductListSerializer(serializers.ModelSerializer):
    season = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    label = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id',
                  'collection',
                  'name',
                  'season',
                  'price',
                  'old_price',
                  'gender',
                  'label',
                  'image',
                  'in_stock',
                  )

    def get_season(self, obj):
        return obj.season_obj

    def get_gender(self, obj):
        return obj.gender_obj

    def get_label(self, obj):
        return obj.label_obj

    def get_image(self, obj):
        image = obj.images.filter(is_main=True).first()
        if image:
            return ImageSerializer(image).data
        image = obj.images.first()
        if image:
            return ImageSerializer(image).data
        return None


class ProductRetrieveSerializer(serializers.ModelSerializer):
    season = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    label = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()
    sizes = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id',
                  'collection',
                  'name',
                  'description',
                  'season',
                  'price',
                  'old_price',
                  'gender',
                  'label',
                  'sizes',
                  'images',
                  'in_stock',
                  )

    def get_season(self, obj):
        return obj.season_obj

    def get_gender(self, obj):
        return obj.gender_obj

    def get_label(self, obj):
        return obj.label_obj

    def get_sizes(self, obj):
        sizes = obj.sizes.all()
        sizes = [size for size in sizes if size.count > 0]
        return SizeSerializer(sizes, many=True).data

    def get_images(self, obj):
        return ImageSerializer(obj.images, many=True).data


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('url',
                  'is_main'
                  )


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSize
        fields = (
            'id',
            'name',
            'count'
            )


class SizeProductSerializer(serializers.ModelSerializer):
    product = ProductListSerializer('product')

    class Meta:
        model = ProductSize
        fields = (
            'id',
            'name',
            'product'
            )
