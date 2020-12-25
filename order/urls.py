from rest_framework import routers

from .views import OrderView

router = routers.SimpleRouter()
router.register('order', OrderView)

urlpatterns = router.urls
