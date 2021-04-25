from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from blog.models import Account
from .models import Customer
from .models import Image
from .models import Product, OrderItem, Order, ShippingAddress
from .models import *

class AccountAdmin(UserAdmin):
    list_display = ('email', 'username', 'date_joined', 'last_login', 'is_admin', 'is_staff')
    search_fields = ('email', 'username')
    readonly_fields = ('id', 'date_joined', 'last_login')
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Account, AccountAdmin)
admin.site.register(Customer)
admin.site.register(Image)
admin.site.register(Product)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(ShippingAddress)
admin.site.register(favorites)
