from django.contrib import admin
from .models import Customer
from .models import Image
from .models import Product, OrderItem, Order
from .models import *

admin.site.register(Customer)
admin.site.register(Image)
admin.site.register(Product)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(ShippingAddress)
