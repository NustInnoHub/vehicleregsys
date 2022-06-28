from asyncio.windows_events import NULL
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.forms import CharField
from django_countries.fields import CountryField

# Create your models here.


class CustomUser(AbstractUser):
    national_id = models.CharField(max_length=13, primary_key=True)
    last_name = models.CharField(max_length=50, null=True)
    first_name = models.CharField(max_length=50, null=True)
    email = models.EmailField(unique=True, null=True) 
    avatar = models.ImageField(null = True, default = "#")

    phone_number = models.CharField(max_length=13, null=True, default="+263770000000")
    date_of_birth = models.DateField(null=True, default='1997-10-19')

class UserAddress(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    street_name = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    province = models.CharField(max_length=150)
    country = CountryField(blank_label = '(select country)')

    
     

