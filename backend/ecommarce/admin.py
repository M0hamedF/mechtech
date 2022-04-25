from django.contrib import admin
from .models import Users,Products,Categorize,Order,Copons
# Register your models here.

admin.site.register(Users)
admin.site.register(Products)
admin.site.register(Categorize)
admin.site.register(Order)
admin.site.register(Copons)
