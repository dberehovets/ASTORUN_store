from django.contrib.auth.hashers import make_password
from rest_framework import serializers


from .models import User
from .utils import validate_user_password


class UserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, max_length=60)
    password = serializers.CharField(write_only=True, validators=[validate_user_password])
    gender = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'password',
            'name',
            'phone',
            'address',
            'date_of_birth',
            'gender',
        ]

    @staticmethod
    def validate_password(value: str) -> str:
        return make_password(value)

    def get_gender(self, obj):
        return obj.object_gender


class UserUpdateSerializer(serializers.ModelSerializer):
    name = serializers.CharField(min_length=2, max_length=60)
    password = serializers.CharField(write_only=True, validators=[validate_user_password])

    class Meta:
        model = User
        fields = [
            'id',
            'name',
            'password',
            'phone',
            'address',
            'date_of_birth',
        ]

    @staticmethod
    def validate_password(value: str) -> str:
        return make_password(value)