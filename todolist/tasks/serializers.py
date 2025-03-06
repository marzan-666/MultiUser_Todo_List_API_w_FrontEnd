from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'is_completed', 'deadline', 'priority']  # ✅ Removed 'assigned_to'

    def create(self, validated_data):# ✅ Assign `None` to `assigned_to` if user is not provided
        validated_data["assigned_to"] = validated_data.get("assigned_to", None)
        return super().create(validated_data)



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)  # ✅ Hash password properly
