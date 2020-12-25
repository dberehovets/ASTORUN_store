from rest_framework import serializers
from .models import Order, OrderItem
from product.serializers import SizeProductSerializer


class OrderListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ('id', 'first_name', 'last_name', 'phone', 'email', 'del_address', 'del_city', 'status_obj',
                  'created', 'updated')

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['user_id'] = user.id
        return super(OrderListSerializer, self).create(validated_data)


class OrderRetrieveSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = ('id', 'first_name', 'last_name', 'phone', 'email', 'del_address', 'del_city', 'status_obj',
                  'created', 'updated', 'items')

    def get_items(self, obj):
        order_items = obj.items.all()
        serialized = OrderItemSerializer(order_items, many=True).data
        return serialized


class OrderItemSerializer(serializers.ModelSerializer):
    size = SizeProductSerializer('size')

    class Meta:
        model = OrderItem
        fields = ('count', 'size')


class OrderItemCreateSerializer(serializers.ModelSerializer):
    count = serializers.IntegerField()

    class Meta:
        model = OrderItem
        fields = "__all__"

    def validate_count(self, value):
        if value < 1:
            raise serializers.ValidationError({"message": {"count": "Count should be 1 or more."}})
        return value

    def create(self, validated_data):
        size = validated_data.get('size')
        count = validated_data.get('count')
        if count > size.count:
            raise serializers.ValidationError({"message": {"count": "Lack of the products in stock"}})
        size.count = size.count - count
        size.save()
        return super(OrderItemCreateSerializer, self).create(validated_data)
