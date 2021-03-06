from django.urls import path
from . import views
from django.urls import include
from .views import (HomeView, ItemDetailView,)
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings
from blog.views import (register,)


urlpatterns = [
    path('register/', views.register, name='register'),
	path('Terms/', views.Terms, name='Terms'),
	#path('social_login/', views.signin, name='social_login'),
    path('', HomeView.as_view(), name='home'),
    path('update_item/', views.updateItem, name='update_items'),
    path('process_order/', views.processOrder, name='process_order'),
    path('xboxseries', views.xboxseries, name='xboxseries'),
    path('playstation5', views.playstation5, name='playstation5'),
    path('PlayStation', views.PlayStation, name='PlayStation'),
    path('Microsoft', views.Microsoft, name='Microsoft'),
    path('Nintendo', views.Nintendo, name='Nintendo'),
    path('TV', views.TV, name='TV-Electronics'),
    path('Smartphones', views.Smartphones, name='Smartphones'),
    path('products/', views.product_list, name='product_list'),
    path('delivery', views.delivery, name='delivery'),
    path('item/<slug>/', ItemDetailView.as_view(), name='item'),
    path('account', views.account, name='account'),
    path("logout", include('django.contrib.auth.urls')),
    path("social_login/", include('django.contrib.auth.urls')),
    #path('add_to_cart/<slug>/', views.add_to_cart, name='add_to_cart'),
    #path('remove_from_cart/<slug>/', views.remove_from_cart, name='remove_from_cart'),
    path('Cart', views.Cart, name='Cart'),
    path('Checkout', views.Checkout, name='Checkout'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)