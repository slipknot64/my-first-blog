from django import forms
from .models import *
from .models import Image
from .models import Product

class UserAccountForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ('email', 'name', 'password', 'Repeatpassword')


class AccountCheckForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ('email', 'name', 'password')
        
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

class ImageForm(forms.ModelForm):

    class Meta:
         model = Image
         fields = ('image',)

class ProductForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = ('title', 'price', 'description', 'image', 'stock', 'pre_order', 'back_order')
