from django.conf import settings
from django.db import models
from django.utils import timezone
from django.shortcuts import reverse

CATEGORY_CHOICES = (
    ('PS5', 'PlayStation 5'),
    ('XS', 'Xbox Series X/S'),
    ('PS', 'PlayStation'),
    ('MS', 'Microsoft'),
    ('NT', 'Nintendo'),
)

class UserAccount(models.Model):
    email = models.CharField(max_length=200)
    username = models.CharField(max_length=200, default = '')
    password = models.CharField(max_length=200)
    Repeatpassword = models.CharField(max_length=200, default = '')
    created_date = models.DateTimeField(default=timezone.now)
    last_login = timezone.now()
    image = models.ImageField(blank=True, null=True)
    def publish(self):
        self.save()

    def __str__(self):
        return self.email

class Product(models.Model):
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=3)
    title = models.CharField(max_length=200)
    price = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField()
    stock = models.IntegerField(default='0')
    pre_order = models.IntegerField(default='0')
    back_order = models.IntegerField(default='0')
    slug = models.SlugField(default="")
    created_date = models.DateTimeField(default=timezone.now)

    def publish(self):
        self.save()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("item", kwargs={
             'slug': self.slug
        })

    def get_add_to_cart_url(self):
        return reverse("add_to_cart", kwargs={
            'slug': self.slug
        })

class Image(models.Model):
    image = models.ImageField(blank=True, null=True)
    def publish(self):
        self.save()

class OrderItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, default="")
    ordered = models.BooleanField(default=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default="")
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.product.title}"

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
