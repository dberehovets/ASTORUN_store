from rest_framework import routers

from .views import CollectionView

router = routers.SimpleRouter()
router.register('collection', CollectionView)

urlpatterns = router.urls
