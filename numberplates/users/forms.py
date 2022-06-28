# from dataclasses import fields
# from pyexpat import model
# from django import forms
# from django.contrib.auth.forms import UserCreationForm
# from .models import CustomUser, ID
# from django.forms import ModelForm

# class CustomUserCreationForm(UserCreationForm):
#     class Meta:
#         model = CustomUser
#         fields = "__all__"



# class LoginForm(forms.Form):
#     email = forms.CharField(
#         widget=forms.TextInput(
#             attrs={
#                 "placeholder": "Email",
#                 "class": "form-control"
#             }
#         ))
#     password = forms.CharField(
#         widget=forms.PasswordInput(
#             attrs={
#                 "placeholder": "Password",
#                 "class": "form-control"
#             }
#         ))


# class SignUpForm(UserCreationForm):
#     username = forms.CharField(
#         widget=forms.TextInput(
#             attrs={
#                 "placeholder": "Username",
#                 "class": "form-control"
#             }
#         ))
#     email = forms.EmailField(
#         widget=forms.EmailInput(
#             attrs={
#                 "placeholder": "Email",
#                 "class": "form-control"
#             }
#         ))
#     password1 = forms.CharField(
#         widget=forms.PasswordInput(
#             attrs={
#                 "placeholder": "Password",
#                 "class": "form-control"
#             }
#         ))
#     password2 = forms.CharField(
#         widget=forms.PasswordInput(
#             attrs={
#                 "placeholder": "Password check",
#                 "class": "form-control"
#             }
#         ))

#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email', 'password1', 'password2')

# class UserForm(ModelForm):
    
#     class Meta:
#         model =  CustomUser
#         fields = ('avatar','username','name','email','bio', 'date_of_birth','phone_number','country')
    


# class IDForm(forms.ModelForm):
#     class Meta:
#         model=ID
#         fields=('pdf',)