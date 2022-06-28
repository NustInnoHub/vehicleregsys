# # -*- encoding: utf-8 -*-
# """
# Copyright (c) 2019 - present AppSeed.us
# """

# # Create your views here.
# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate, login, logout
# from .forms import LoginForm, SignUpForm, UserForm, IDForm
# from django.contrib.auth.decorators import login_required
# from .models import CustomUser, ID
# from django.core.files.storage import FileSystemStorage

# def login_view(request):
#     form = LoginForm(request.POST or None)

#     msg = None

#     if request.method == "POST":

#         if form.is_valid():
#             email = form.cleaned_data.get("email")
#             password = form.cleaned_data.get("password")
#             user = authenticate(email=email, password=password)
#             if user is not None:
#                 login(request, user)
#                 if user.is_superuser==True:
#                     return redirect("/")
#                 else:
#                     if user.is_farmer==True:
#                         return redirect('farmer-dash')
#                     else:
#                         return redirect('investor-dash')
#             else:
#                 msg = 'Invalid credentials'
#         else:
#             msg = 'Error validating the form'

#     return render(request, "users/login.html", {"form": form, "msg": msg})


# def register_user(request):
#     msg = None
#     success = False

#     if request.method == "POST":
#         form = SignUpForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get("username")
#             raw_password = form.cleaned_data.get("password1")
#             user = authenticate(username=username, password=raw_password)

#             msg = 'User created - please <a href"users/login.html">login</a>.'
#             success = True

#             # return redirect("/login/")

#         else:
#             msg = 'Form is not valid'
#     else:
#         form = SignUpForm()

#     return render(request, "users/register.html", {"form": form, "msg": msg, "success": success})

# def logoutUser(request):
#     logout(request)
#     return redirect('#')

# def profile(request):
    
#     context = {}
#     return render(request, "users/profile.html", context)

# def documents(request):
    
#     birth = ID.objects.get(uploaded_by = request.user)
    
#     if request.method == 'POST':
        
#         form = IDForm(request.POST, request.FILES)
#         if form.is_valid():
            
#             id = form.save(commit=False)
#             id.uploaded_by = request.user
#             form.save()
            
#             return redirect('documents')
#     else:
#         form=IDForm()
#     context = {'form':form, 'birth':birth}
#     return render(request, "users/documents.html", context)

# @login_required(login_url='login')
# def updateUser(request, pk):
    
#     user = CustomUser.objects.get(id=pk)
#     form = UserForm(instance=user)
    
#     if request.method == 'POST':
#         form = UserForm(request.POST, request.FILES, instance=user)
#         if form.is_valid():
#             form.save()
#             return redirect('profile')
    
#     return render(request, "users/update_user.html", {'form':form})

# def idList(request):
#     return render(request, 'users/id_list.html')

# def uploadList(request):
#     return render(request, 'users/upload.html')