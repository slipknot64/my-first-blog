from django.conf import settings
from django.db import models
from django.utils import timezone
from django.shortcuts import reverse
from django.contrib.auth.models import User, AbstractBaseUser, BaseUserManager

# create a new user
# create a superuser

class MyAccountManager(BaseUserManager):

    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError("Users must have an email address.")
        if not username:
            raise ValueError("Users must have a username.")
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

def get_profile_image_filepath(self):
    return f'profile_images/{self.pk}/{profile_image.png}'

def get_default_profile_image():
    return "profile images/hamza.jpg"

class Account(AbstractBaseUser):

    #customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    email = models.EmailField(verbose_name="email", max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True)
    date_joined = models.DateTimeField(verbose_name="date joined", auto_now_add=True)
    last_login = models.DateTimeField(verbose_name="last login", auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    profile_image = models.ImageField(max_length=255, upload_to=get_profile_image_filepath, null=True, blank=True, default=get_default_profile_image)
    hide_email = models.BooleanField(default=True)

    objects = MyAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username
    
    def get_profile_image_filename(self):
        return str(self.profile_image)[str(self.profile_image).index(f'profile_images/{self.pk}/'):]

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

CATEGORY_CHOICES = (
    ('PS5', 'PlayStation 5'),
    ('XS', 'Xbox Series X/S'),
    ('PS', 'PlayStation'),
    ('MS', 'Microsoft'),
    ('NT', 'Nintendo'),
)

class Customer(models.Model):
    #user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    email = models.CharField(max_length=200, null=True)
    name = models.CharField(max_length=200, null=True)
    password = models.CharField(max_length=200)
    Repeatpassword = models.CharField(max_length=200, default = '')
    created_date = models.DateTimeField(default=timezone.now)
    last_login = timezone.now()
    image = models.ImageField(blank=True, null=True)
    def publish(self):
        self.save()

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=3)
    title = models.CharField(max_length=200, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
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
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    start_date = models.DateTimeField(auto_now_add=True)
    date_orderd = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=200, null=True)
    orderd = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    @property
    def shipping(self):
        shipping = False
        orderitems = self.orderitem_set.all()
        for i in orderitems:
            if i.product.digital == False:
                shipping = True
        return shipping

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
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    zipcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address

class favorites(models.Model):
    favourite = models.ManyToManyField(Product, related_name='favorite', blank=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=3, null=True)
    title = models.CharField(max_length=200, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True)
    digital = models.BooleanField(default=False, null=True, blank=False)
    description = models.TextField(null=True, blank=True)
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

    def get_add_to_favorite_url(self):
        return reverse("add_to_favorites", kwargs={
            'slug': self.slug
        })

    def get_remove_from_favoite_url(self):
        return reverse("remove_from_favorites", kwargs={
            'slug': self.slug
        })