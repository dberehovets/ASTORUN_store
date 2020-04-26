from django.core.paginator import Paginator, EmptyPage
from shop.serializers import ProductSerializer


class CustomPagination:

    def get_page(self, request, products):
        page_number = request.data.get('page', 1)
        page_size = request.data.get('page_size', 10)

        paginator = Paginator(products, page_size)
        try:
            page = ProductSerializer(paginator.page(page_number), many=True).data
        except EmptyPage:
            return None

        result = {
            "page": page_number,
            "pages": paginator.num_pages,
            "page_size": page_size,
            "total_items": products.count(),
            "results": page
        }
        return result