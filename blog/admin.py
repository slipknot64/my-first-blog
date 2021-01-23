from django.contrib import admin
from .models import UserAccount
from .models import Image
from .models import Product, OrderItem, Order

admin.site.register(UserAccount)
admin.site.register(Image)
admin.site.register(Product)
admin.site.register(OrderItem)
admin.site.register(Order)
