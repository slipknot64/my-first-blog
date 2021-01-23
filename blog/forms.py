from django import forms
from .models import UserAccount
from .models import Image
from .models import Product

class UserAccountForm(forms.ModelForm):

    class Meta:
        model = UserAccount
        fields = ('email', 'password', 'Repeatpassword')


class AccountCheckForm(forms.ModelForm):

    class Meta:
        model = UserAccount
        fields = ('email', 'password')

class ImageForm(forms.ModelForm):

    class Meta:
         model = Image
         fields = ('image',)

class ProductForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = ('title', 'price', 'description', 'image', 'stock', 'pre_order', 'back_order')
