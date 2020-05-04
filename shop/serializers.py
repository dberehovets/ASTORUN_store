from rest_framework import serializers
from shop.models import Category, Product, ProductImage


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'main_image')


class ProductSerializer(serializers.ModelSerializer):
    collection = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    size = serializers.SerializerMethodField()
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

    def get_size(self, obj):
        return obj.object_size

    def get_label(self, obj):
        return obj.object_label