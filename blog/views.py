from .models import Product, OrderItem, Order, ShippingAddress, User, reverse, timezone, models, settings, Image, CATEGORY_CHOICES, Customer
from .forms import AccountCheckForm
from .forms import UserAccountForm
from .forms import ProductForm
from .forms import AuthenticationForm
from .forms import RegistrationForm
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib import messages
from django.views.generic import ListView, DetailView
from django.utils import timezone
from django.core.mail import send_mail
from django.http import JsonResponse
from django.core import serializers
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from .utils import Util
import json
import datetime
from .utils import cookieCart, cartData, guestOrder
# Create your views here.
def register(request, *args, **kwargs):
    user = request.user
    if user.is_authenticated:
        return HttpResponse(f"You are already authenticated as {user.email}.")
    context = {}
    if request.POST:
        form = RegistrationForm(request.POST)
        if form.is_valid():
            person = form.save(commit=False)
            person.is_active = False
            form.save()
            email = form.cleaned_data.get('email').lower()
            raw_password = form.cleaned_data.get('password1')
            account = authenticate(email=email, password=raw_password)
            user_data = serializer.data
            user = User.objects.get(email=user_data['email'])
            token=RefreshToken.for_user(user).access_token
            current_site=get_current_site(request)
            relativeLink=reverse('email-verify')
            absurl='http://'+current_site+relativeLink+"?token="+token
            email_body = 'Hi '+user.username+' Use link below to verify your email \n'+ absurl
            data={'email_body': email_body, 'email_subject': 'Verify your email'}
            Util.send_mail(data)
            send_mail('Email confirmation', 'Click the link to confirm email.', 'groovydigitalplc@gmail.com', ['adilgreet@gmail.com'], fail_silently=False,)
            login(request, account)
            destination = kwargs.get("next")
            if destination:
                return redirect(destination)
            return redirect("home")
        else:
            context['registration_form'] = form
    return render(request, 'blog/bootstrap.html', context)

class VerifyEmail(generics.GenericAPIView):
    def get(self):
        pass
#def signin(request):
    #if request.method == "POST":
      #  form = AccountCheckForm(request.POST)
       # if form.is_valid():
           # user = form.save(commit=False)
           # check = Customer.objects.get(email = user.email)
            #if check.password == user.password:
             #   return redirect('home')
   # else:
      #  form = AccountCheckForm()
    #return render(request, 'blog/Social Login Form.html', {'form' : form})

def Terms(request):
    return render(request, 'blog/Terms & Privacy.html')

#def search_term(request):
#    if request.method == 'POST':
#        search_str = json.loads(request.body).get('search_data')
#        product = Product.objects.filter(
#            amount__starts_with=search_str, owner=request.user) | Product.objects.filter(
#            title__starts_with=search_str, owner=request.user) | Product.objects.filter(
#            category__starts_with=search_str, owner=request.user) | Product.objects.filter(
#            description__starts_with=search_str, owner=request.user) | Product.objects.filter(
#            digital__starts_with=search_str, owner=request.user)
#        data = product.values()
#        return JsonResponse(list(data), safe=False)

class HomeView(ListView):
    model = Product
    template_name = "blog/Homepage.html"

class ItemDetailView(DetailView):
    model = Product
    template_name = "blog/main.html"

#def home(request):
#    items={
#           'products': Product.objects.all()
#           }
#    return render(request, 'blog/Homepage.html',items)

def favorites(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/favorites.html', context)

def favoriteItems(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']

    print('Action:', action)
    print('ProductId:', productId)


    customer = request.user.customer
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)

    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)

    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()

    return JsonResponse('Item was added', safe=False)

def Cart(request):

    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/Cart.html', context)

def Checkout(request):

    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/Checkout.html', context)

def xboxseries(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/xboxseries.html', context)

def playstation5(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/playstation5.html', context)

def PlayStation(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/PlayStation.html', context)

def Microsoft(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/Microsoft.html', context)

def Nintendo(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/Nintendo.html', context)

def TV(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/TV Electronics.html', context)

def Smartphones(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/Tablets mobiles.html', context)

def product_list(request):
    products = Product.objects.all()
    return render(request, 'blog/product_list.html', {'products' : products})

#def product_detail(request, pk):
#    product = get_object_or_404(Product, pk=pk)
#    return render(request, 'blog/product_detail.html', {'product': product})

def delivery(request):
    return render(request, 'blog/Delivery.html')

#def item(request):
#    return render(request, 'blog/item.html')

def account(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    if request.user.is_authenticated:
        return render(request, 'blog/Account.html', context)
    else:
        return render(request, 'blog/Social Login Form.html')

def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("home")


def login_request(request):
    if request.method == 'POST':
        form = AccountCheckForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            #check = Customer.objects.get(email = user.email)
            check = Customer.objects.get(name = user.name)
            if check.password == user.password:
                user = authenticate(name=user.name, password=user.password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {user.name}")
                return redirect('home')
            else:
                messages.error(request, "Invalid username or password.")
                form = AccountCheckForm()
            return render(request = request, template_name = "blog/Social Login Form.html",context={"form":form})

#def login_request(request, *args, **kwargs):

#    context = {}

#    user = request.user
#    if user.is_authenticated:
#        return redirect("home")

#    if request.POST:
#        form = AccountAuthenticationForm(request.POST)
#        if form.is_valid():
#            form.save()
#            email = request.POST['email']
#            password = request.POST['password']
#            user = authenticate(email=email, password=password)
#            if user:
#                login(request, user)
#                destination = get_redirect_if_exists(request)
#                if destination:
#                    return redirect(destination)
#                return redirect("home")
#        else:
#            context['login_form'] = form
#    return render(request, "blog/login.html", context)

#def get_redirect_if_exists(request):
#    redirect = None
#    if request.GET:
#        if request.GET.get("next"):
#            redirect str(request.Get.get("next"))
#    return redirect

def updateItem(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']

    print('Action:', action)
    print('ProductId:', productId)


    customer = request.user
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)

    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)

    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()

    return JsonResponse('Item was added', safe=False)

def processOrder(request):
    transaction_id = datetime.datetime.now().timestamp()
    data = json.loads(request.body)

    if request.user.is_authenticated:
        customer = request.user
        order, created = Order.objects.get_or_create(customer=customer, complete=False)


    else:
        customer, order = guestOrder(request, data)

    total = float(data['form']['total'])
    order.transaction_id = transaction_id

    if total == float(order.get_cart_total):
        order.complete = True
    order.save()

    if order.shipping == True:
        ShippingAddress.objects.create(
                customer=customer,
                order=order,
                address=data['shipping']['address'],
                city=data['shipping']['city'],
                state=data['shipping']['state'],
                zipcode=data['shipping']['zipcode'],
            )
    return JsonResponse('Payment complete!', safe=False)
