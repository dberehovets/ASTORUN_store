from rest_framework import serializers
from shop.models import Category, Product, ProductImage, ProductSize


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'main_image')


class ProductSerializer(serializers.ModelSerializer):
    collection = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    label = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id',
                  'category',
                  'name',
                  'description',
                  'main_image',
                  'quantity',
                  'collection',
                  'price',
                  'old_price',
                  'gender',
                  'size',
                  'label',
                  )

    def get_collection(self, obj):
        return obj.object_collection

    def get_gender(self, obj):
        return obj.object_gender

    def get_label(self, obj):
        return obj.object_label


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('product', 'image')


class ProductSizeSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = ProductSize
        fields = ('product', 'name', 'quantity')

    def get_name(self, obj):
        return obj.object_name