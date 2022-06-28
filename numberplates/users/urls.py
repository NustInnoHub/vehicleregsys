from django.urls import path
from .views import login_view, register_user
from django.contrib.auth.views import LogoutView
from . import views

urlpatterns = [
    # path('login/', login_view, name="login"),
    # path('register/', register_user, name="register"),
    # path("logout/", LogoutView.as_view(), name="logout"),
    
    # path('profile/', views.profile, name="profile"),
    # path('update-user/<str:pk>/', views.updateUser, name="update-user"),
    # path('documents/', views.documents, name="documents"),
    
    # path('documents/', views.idList, name='ID_List' ),
    # path('documents/upload/', views.uploadList, name='Upload_List' ),
]
