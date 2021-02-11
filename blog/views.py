from .models import UserAccount
from .models import Product, OrderItem, Order
from .forms import AccountCheckForm
from .forms import UserAccountForm
from .forms import ProductForm
from django.shortcuts import render, redirect, get_object_or_404
from django.core.mail import send_mail

# Create your views here.
def register(request):
    if request.method == "POST":
        form = UserAccountForm(request.POST)
        if form.is_valid():
            #send_mail('Email confirmation', 'Click the link to confirm email.', 'noreply@groovydigitalplc.co.uk', ['to@example.com'], fail_silently=False)
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            return redirect('social_login')
    else:
        form = UserAccountForm()
    return render(request, 'blog/bootstrap.html', {'form' : form})

def signin(request):
    if request.method == "POST":
        form = AccountCheckForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            check = UserAccount.objects.get(email = user.email)
            if check.password == user.password:
                return redirect('home')
    else:
        form = AccountCheckForm()
    return render(request, 'blog/Social Login Form.html', {'form' : form})

def Terms(request):
    return render(request, 'blog/Terms & Privacy.html')

def home(request):
    items={
           'products': Product.objects.all()
           }
    return render(request, 'blog/Homepage.html',items)

def Checkout(request):
    return render(request, 'blog/Checkout.html')

def Xbox(request):
    return render(request, 'blog/Xbox.html')

def playstation5(request):
    return render(request, 'blog/playstation5.html')

def PlayStation(request):
    return render(request, 'blog/PlayStation.html')

def Microsoft(request):
    return render(request, 'blog/Microsoft.html')

def Nintendo(request):
    return render(request, 'blog/Nintendo.html')

def TV(request):
    return render(request, 'blog/TV Electronics.html')

def Smartphones(request):
    return render(request, 'blog/Tablets mobiles.html')

def product_list(request):
    products = Product.objects.all()
    return render(request, 'blog/product.html', {'products' : products})

#def product_detail(request, pk):
#    product = get_object_or_404(Product, pk=pk)
#    return render(request, 'blog/product_detail.html', {'product': product})

def delivery(request):
    return render(request, 'blog/Delivery.html')

def item(request):
    return render(request, 'blog/item.html')
