from .models import Product, OrderItem, Order, ShippingAddress, User, reverse, timezone, models, settings, Image, CATEGORY_CHOICES, Account, ProductImage
from .forms import AccountCheckForm, UserAccountForm, ProductForm, AuthenticationForm, RegistrationForm, AccountAuthenticationForm
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib import messages
from django.views.generic import ListView, DetailView, View
from django.utils import timezone
from django.http import JsonResponse
from django.core import serializers
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
            user.first_name = self.cleaned_data['first_name']
            user.last_name = self.cleaned_data['last_name']
            form.save()
            email = form.cleaned_data.get('email').lower()
            raw_password = form.cleaned_data.get('password1')
            account = authenticate(email=email, password=raw_password)
            login(request, account)
            destination = get_redirect_if_exists(request)
            if destination: # if destination != None
                return redirect(destination)
            return redirect("home")
        else:
            context['registration_form'] = form
    return render(request, 'blog/bootstrap.html', context)

def login_view(request, *args, **kwargs):

    context = {}

    user = request.user
    if user.is_authenticated:
        return redirect("home")
    
    if request.POST:
        form = AccountAuthenticationForm(request.POST)
        if form.is_valid():
            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(email=email, password=password)
            if user:
                login(request, user)
                destination = get_redirect_if_exists(request)
                if destination:
                    return redirect(destination)
                return redirect("home")
        else:
            context['login_form'] = form
    return render(request, "blog/Social Login Form.html", context)

def get_redirect_if_exists(request):
    redirect = None
    if request.GET:
        if request.GET.get("next"):
            redirect = str(request.Get.get("next"))
    return redirect

def logout_view(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("home")

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
    #def get(self, request):
    #    data = cartData(request)
    #    cartItems = data['cartItems']
    #    order = data['order']
    #    items = data['items']
    #    context = {'items':items, 'order':order, 'cartItems':cartItems}
    #    return render(request, 'blog/Homepage.html', context)
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
    return render(request, 'blog/comingsoon.html', context)

def playstation5(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)

def PlayStation(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)

def Microsoft(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)

def Nintendo(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)

def TV(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)

def Smartphones(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)
    
def MobilePhones(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/mobile-phones.html', context)
    
def IPhones(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/apple-iphone.html', context)
    
def PC(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)
    
def sale(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)
    
def Ubisoft(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)
    
def all_brands(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)
    
def january_sale(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'blog/comingsoon.html', context)

def product_list(request):
    products = Product.objects.all()
    return render(request, 'blog/product_list.html', {'products' : products})

def detail_view(request, id):
    product = get_object_or_404(Product, id=id)
    photos = ProductImage.objects.filter(product=product)
    return render(request, 'detail.html', {
        'product':product,
        'photos':photos
    })

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
