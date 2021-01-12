from rest_framework import permissions, viewsets, mixins

from .models import Collection
from .serializers import CollectionSerializer


class CollectionView(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return self.queryset.order_by('name')
