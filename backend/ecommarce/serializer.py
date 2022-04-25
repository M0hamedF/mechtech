from dataclasses import Field
from rest_framework import serializers
from .models import Users,Products,Order,Copons

class log(serializers.ModelSerializer):
    class Meta:
      model=(Users)
      fields='__all__'

class shop(serializers.ModelSerializer):
  class Meta:
    model=(Products)
    fields='__all__'

class newPass(serializers.ModelSerializer):
  class Meta:
    model=(Users)
    fields=['password']

class cart(serializers.ModelSerializer):
  class Meta:
    model=(Order)
    fields='__all__'

class sale(serializers.ModelSerializer):
  class Meta:
    model=(Copons)
    fields='__all__'