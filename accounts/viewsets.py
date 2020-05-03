from django_filters import rest_framework as filter
from rest_framework.filters import OrderingFilter
from rest_framework import permissions, viewsets

from .filters import UserFilter
from .models import User
from .serializers import (UserSerializer, UserUpdateSerializer)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (filter.DjangoFilterBackend, OrderingFilter)
    filterset_class = UserFilter

    def get_serializer_class(self):
        if self.request.method == 'PUT':
            return UserUpdateSerializer
        return UserSerializer

    def get_queryset(self):
        return super(UserViewSet, self).get_queryset().order_by('created')