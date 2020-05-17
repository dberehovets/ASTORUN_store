from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from shop.models import Category, Product, ProductImage, ProductSize, Order, OrderItem


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
                  'collection',
                  'price',
                  'old_price',
                  'gender',
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
        fields = ('id', 'product', 'name', 'quantity')

    def get_name(self, obj):
        return obj.object_name


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ('id', 'user', 'anonymous')

    def validate(self, attrs):
        user = attrs.get('user', None)
        anon = attrs.get('anonymous', None)
        if not user and not anon:
            raise ValidationError("Please provide information about the user!")
        return attrs


class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = ('id', 'item', 'order', 'quantity')

    def validate(self, attrs):

        item_quantity = attrs['item'].quantity

        if attrs['quantity'] > item_quantity:
            raise ValidationError("Order quantity is higher than the amount of the product in stock!")

        return attrs

    def save(self, **kwargs):
        size_item = self.validated_data.get('item')
        size_item.quantity -= self.validated_data.get('quantity')
        size_item.save()
        return super().save(**kwargs)
