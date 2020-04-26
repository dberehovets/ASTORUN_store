from rest_framework import serializers
from shop.models import Category, Product, ProductImage


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    collection = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    size = serializers.SerializerMethodField()
    extra = serializers.SerializerMethodField()

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
                  'extra'
                  )

    def get_collection(self, obj):
        return obj.object_collection

    def get_gender(self, obj):
        return obj.object_gender

    def get_size(self, obj):
        return obj.object_size

    def get_extra(self, obj):
        return obj.object_extra