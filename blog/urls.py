from django.urls import path
from . import views
from django.urls import include

urlpatterns = [
    path('register/', views.register, name='register'),
	path('Terms/', views.Terms, name='Terms'),
	path('social_login/', views.signin, name='social_login'),
    path('', views.home, name='home'),
    path('Checkout', views.Checkout, name='Checkout'),
    path('Xbox', views.Xbox, name='Xbox'),
    path('playstation5', views.playstation5, name='playstation5'),
    path('PlayStation', views.PlayStation, name='PlayStation'),
    path('Microsoft', views.Microsoft, name='Microsoft'),
    path('Nintendo', views.Nintendo, name='Nintendo'),
    path('TV', views.TV, name='TV-Electronics'),
    path('Smartphones', views.Smartphones, name='Smartphones'),
    path('products/', views.product_list, name='product_list'),
]
