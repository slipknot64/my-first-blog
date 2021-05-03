from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate
from blog.models import Account
from .models import *
from .models import Image
from .models import Product

class RegistrationForm(UserCreationForm):
    email = forms.EmailField(max_length=255, help_text="Required. Add a valid email address.")
    
    class Meta:
        model = Account
        fields = ('email', 'username', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data['email'].lower()
        try:
           account = Account.objects.get(email=email)
        except Exception as e:
            return email
        raise forms.ValidationError(f"Email {email} is already in use.")
    
    def clean_username(self):
        username = self.cleaned_data['username']
        try:
           account = Account.objects.get(username=username)
        except Exception as e:
            return username
        raise forms.ValidationError(f"Username {username} is already in use.")

class UserAccountForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ('email', 'name', 'password', 'Repeatpassword')


class AccountCheckForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ('name', 'password')
       
class AuthenticationForm(forms.ModelForm):
    email = forms.EmailField(required=True)
    class Meta:
        model = Customer
        fields = ("email", "password")

    def save(self, commit=True):
        user = super(AuthenticationForm, self).save(commit=False)
        user.email = self.cleaned_data["email"]
        if commit:
            user.save()
        return user

class AccountAuthenticationForm(forms.ModelForm):

    password =forms.CharField(label="Password", widget=forms.PasswordInput)

    class Meta:
        model = Account
        fields = ("email", "password")
    
    def save(self):
        email = self.cleaned_data['email']
        password = self.cleaned_data['password']
        user = authenticate(email=email, password=password)
        if user:
            login(request, user)

    def clean(self):
        if self.is_valid():
           email = self.cleaned_data['email']
           password = self.cleaned_data['password']
           if not authenticate(email=email, password=password):
               raise forms.ValidationError("Invalid Login")

class ImageForm(forms.ModelForm):

    class Meta:
         model = Image
         fields = ('image',)

class ProductForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = ('title', 'price', 'description', 'image', 'stock', 'pre_order', 'back_order')
