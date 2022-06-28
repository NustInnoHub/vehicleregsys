from django.contrib import admin
from .models import CustomUser, UserAddress
# from .forms import CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin

# Register your models here.

    

admin.site.register(CustomUser)
admin.site.register(UserAddress)