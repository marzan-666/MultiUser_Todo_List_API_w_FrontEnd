from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny  # ✅ No authentication
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer, UserSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [AllowAny]  # ✅ No authentication required

    '''def perform_create(self, serializer):
        serializer.save()'''  # ✅ No user assignment

    '''def perform_create(self, serializer):
        serializer.save(assigned_to=self.request.user)  '''# ✅ Assign logged-in user to task

    def perform_create(self, serializer):
        # ✅ If user is not authenticated, don't assign a user
        if self.request.user.is_authenticated:
            serializer.save(assigned_to=self.request.user)
        else:
            serializer.save(assigned_to=None)  # ✅ Allow tasks without a user


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # ✅ Anyone can register

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
