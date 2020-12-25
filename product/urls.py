from rest_framework import routers

from .views import ProductView

router = routers.SimpleRouter()
router.register('product', ProductView)

urlpatterns = router.urls
