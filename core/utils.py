from rest_framework import serializers, exceptions
from rest_framework_simplejwt.serializers import TokenObtainSerializer
from rest_framework_simplejwt.settings import api_settings
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenViewBase
from rest_framework.views import exception_handler

from user.models import User
from user.serializers import UserSerializer


class CustomTokenObtainPairSerializer(TokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['user'] = UserSerializer(self.user).data
        return data


class CustomTokenObtainPairView(TokenViewBase):
    serializer_class = CustomTokenObtainPairSerializer


class CustomTokenRefreshSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        refresh = RefreshToken(attrs['refresh'])
        user = User.objects.filter(id=refresh.access_token['user_id'])
        data = {'access': str(refresh.access_token)}
        if api_settings.ROTATE_REFRESH_TOKENS:
            if api_settings.BLACKLIST_AFTER_ROTATION:
                try:
                    refresh.blacklist()
                except AttributeError:
                    pass
            refresh.set_jti()
            refresh.set_exp()
            data['refresh'] = str(refresh)
            data['user'] = UserSerializer(user.first()).data

        return data


class CustomTokenRefreshView(TokenViewBase):
    serializer_class = CustomTokenRefreshSerializer


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler
    response = exception_handler(exc, context)

    resp = {}
    for key in response.data.keys():
        resp[key] = response.data[key]

    for key in resp.keys():
        response.data.pop(key)

    response.data['message'] = resp

    # Add the HTTP status code to the response.
    if response is not None:
        response.data['status_code'] = response.status_code
    return response
