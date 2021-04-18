import django_filters
from .models import Product

class OrderFilter(django_filters.FilterSet):
    class Meta:
        model = Product
        fields = ['title']
        filter_fields = ["field_1", "field_2"]