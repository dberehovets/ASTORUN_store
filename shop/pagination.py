from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class ProductPagination(PageNumberPagination):
    page = 1
    page_size = 10

    def get_paginated_response(self, data):
        return Response({
            'page': self.request.POST.get('page', self.page),
            'total': self.page.paginator.count,
            'page_size': int(self.request.POST.get('page_size', self.page_size)),
            'results': data
        })