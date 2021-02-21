from .models import UserAccount
from .models import Product, OrderItem, Order
from .forms import AccountCheckForm
from .forms import UserAccountForm
from .forms import ProductForm
from .forms import AuthenticationForm
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.views.generic import ListView, DetailView
from django.utils import timezone
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
            return redirect('login')
    else:
        form = UserAccountForm()
    return render(request, 'blog/bootstrap.html', {'form' : form})

#def signin(request):
    #if request.method == "POST":
      #  form = AccountCheckForm(request.POST)
       # if form.is_valid():
           # user = form.save(commit=False)
           # check = UserAccount.objects.get(email = user.email)
            #if check.password == user.password:
             #   return redirect('home')
   # else:
      #  form = AccountCheckForm()
    #return render(request, 'blog/Social Login Form.html', {'form' : form})

def Terms(request):
    return render(request, 'blog/Terms & Privacy.html')


class HomeView(ListView):
    model = Product
    template_name = "blog/Homepage.html"

class ItemDetailView(DetailView):
    model = Product
    template_name = "blog/item.html"

#def home(request):
#    items={
#           'products': Product.objects.all()
#           }
#    return render(request, 'blog/Homepage.html',items)

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

#def item(request):
#    return render(request, 'blog/item.html')

def account(request):
    return render(request, 'blog/Account.html')

def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("home")


def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}")
                return redirect('blog/Homepage.html')
            else:
                messages.error(request, "Invalid username or password.")
    form = AuthenticationForm()
    return render(request = request,
                    template_name = "blog/login.html",
                    context={"form":form})

def add_to_cart(request, slug):
    item = get_object_or_404(Product, slug=slug)
    order_item, created = OrderItem.objects.get_or_create(
         product=item,
         user=request.user,
         ordered=False
    )
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        #check if the order itme is in the ordered
        if order.items.filter(product__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            return redirect("item", slug=slug)
        else:
            order.items.add(order_item)
            return redirect("item", slug=slug)
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(
                    user=request.user, ordered_date=ordered_date)
        order.items.add(order_item)
        return redirect("item", slug=slug)


def remove_from_cart(request, slug):
    item = get_object_or_404(Product, slug=slug)
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        #check if the order itme is in the ordered
        if order.items.filter(product__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                 product=item,
                 user=request.user,
                 ordered=False
            ) [0]
            order.items.remove(order_item)
            return redirect("item", slug=slug)
        else:
            return redirect("item", slug=slug)

    else:
        return redirect("item", slug=slug)
