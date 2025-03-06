from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, RegisterView  # ✅ Import both views

# ✅ Setup router for TaskViewSet
router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),  # ✅ API for tasks (list, create, update, delete)
    path("register/", RegisterView.as_view(), name="register"),  # ✅ API for user registration
]
