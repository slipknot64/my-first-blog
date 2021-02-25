from django.conf import settings
from django.db import models
from django.utils import timezone
from django.shortcuts import reverse
from django.contrib.auth.models import User

CATEGORY_CHOICES = (
    ('PS5', 'PlayStation 5'),
    ('XS', 'Xbox Series X/S'),
    ('PS', 'PlayStation'),
    ('MS', 'Microsoft'),
    ('NT', 'Nintendo'),
)

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    email = models.CharField(max_length=200)
    username = models.CharField(max_length=200, null=True)
    password = models.CharField(max_length=200)
    Repeatpassword = models.CharField(max_length=200, default = '')
    created_date = models.DateTimeField(default=timezone.now)
    last_login = timezone.now()
    image = models.ImageField(blank=True, null=True)
    def publish(self):
        self.save()

    def __str__(self):
        return self.username

class Product(models.Model):
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=3)
    title = models.CharField(max_length=200, null=True)
    price = models.FloatField(max_length=200)
    digital = models.BooleanField(default=False, null=True, blank=False)
    description = models.TextField()
    image = models.ImageField(null=True, blank=True)
    stock = models.IntegerField(default='0')
    pre_order = models.IntegerField(default='0')
    back_order = models.IntegerField(default='0')
    slug = models.SlugField(default="")
    created_date = models.DateTimeField(default=timezone.now)

    def publish(self):
        self.save()

    def __str__(self):
        return self.title
    
    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url    

    def get_absolute_url(self):
        return reverse("item", kwargs={
             'slug': self.slug
        })

    def get_add_to_cart_url(self):
        return reverse("add_to_cart", kwargs={
            'slug': self.slug
        })

    def get_remove_from_cart_url(self):
        return reverse("remove_from_cart", kwargs={
            'slug': self.slug
        })

class Image(models.Model):
    image = models.ImageField(blank=True, null=True)
    def publish(self):
        self.save()

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    start_date = models.DateTimeField(auto_now_add=True)
    date_orderd = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=200, null=True)
    orderd = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        return total

    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total    

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True,)

    @property
    def get_total(self):
        total = self.product.price * self.quantity
        return total

class ShippingAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    country = models.CharField(max_length=200, null=True)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    postcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address
