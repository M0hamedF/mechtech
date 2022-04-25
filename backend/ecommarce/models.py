from random import choices
from tokenize import Name
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.hashers import make_password
from PIL import Image
from django.contrib.postgres.fields import ArrayField


# Create your models here.

country_choice=(
    ('eg','Egypt'),
    ('us','United state'),
    ('su','Saudi Arabia'),
    ('ue','Emarties')
)
def upload_path(instance,filename):
    return '/'.join(['image',str(instance.nick_name),filename])

class Copons(models.Model):
  id=models.AutoField(auto_created=True,primary_key=True)
  Name=models.CharField(max_length=200,blank=True,null=True)
  Sale=models.IntegerField(default=5,blank=False,null=False)

  def __str__(self):
    return f'id: {self.id} Name: {self.Name} Sale: {self.Sale}%'
 
class Users(models.Model):
 id=models.AutoField(auto_created=True,primary_key=True)
 name=models.CharField(max_length=100,default='')
 nick_name=models.CharField(max_length=100,default='',unique=True)
 email=models.EmailField(_('email adress'),unique=True)
 password=models.CharField(max_length=220,default='',blank=True)
 phone=models.IntegerField(null=True,blank=True)
 country=models.CharField(choices=country_choice,max_length=16)
 img=models.ImageField(blank=True,default='',null=True,upload_to=upload_path)
 admin=models.BooleanField(default=False,blank=True)
 customer=models.BooleanField(default=False,blank=True)
 copon=models.ManyToManyField(Copons,null=True,blank=True)

 def __str__(self):
  return f'id: {self.id} name: {self.name} email: {self.email} admin: {self.admin} customer: {self.customer}' 


categorize=(
    ('labtop','labtop'),
    ('PS','PS'),
    ('PS accessories','PS accessories'),
    ('PC','PC'),
    ('Mobilegaming','Mobile gaming'),
    ('Monitor','Monitor'),
    ('accessories','accessories'),
    ('memory','memory'),
    ('Tower','Tower')
)
def upload_product(instance,filename):
    return '/'.join(['image',str(instance.made_in),filename])

class Categorize(models.Model):
 id=models.AutoField(primary_key=True,auto_created=True)   
 Item=models.CharField(default='',max_length=200)

 def __str__(self):
    return f'Item: {self.Item}'

class Products(models.Model):
 id=models.AutoField(primary_key=True,auto_created=True)
 product_name=models.CharField(max_length=100,default='')
 product_image1=models.ImageField(blank=True,default='',null=True,upload_to=upload_product)
 product_image2=models.ImageField(blank=True,default='',null=True,upload_to=upload_product)
 product_image3=models.ImageField(blank=True,default='',null=True,upload_to=upload_product)
 product_image4=models.ImageField(blank=True,default='',null=True,upload_to=upload_product)
 product_image5=models.ImageField(blank=True,default='',null=True,upload_to=upload_product)
 cretedBy=models.CharField(max_length=100,blank=True,default='')
 details=models.JSONField(default="{}")
 created_at=models.DateTimeField(auto_now_add=True,blank=True)
 Rate=models.IntegerField(blank=True,null=True)
 product_categorize=models.CharField(choices=categorize,max_length=40,default='')
 product_categorize_two=models.ManyToManyField(to=Categorize,related_name='catigo')
 made_in=models.CharField(max_length=100,default='',blank=True)
 quantity=models.IntegerField(default=1,blank=True,null=True)
 reviews=models.JSONField(default=[])
 price=models.IntegerField()

 def __str__(self):
   return f'id: {self.id} product_name= {self.product_name} createdBy= {self.cretedBy} price: {self.price}'



state=(
('Pending','Pending'),
('Charging','Charging'),
('Delivery in progess','Delivery in progess'),
('Delivered','Delivered')
)
class Order(models.Model):
    id=models.AutoField(auto_created=True,primary_key=True)
    Products=models.ManyToManyField(Products,related_name='products')
    order_state=models.CharField(choices=state,max_length=100)
    Address=models.JSONField(default=[])
    order_time=models.DateTimeField(auto_now_add=True, blank=True)
    order_duration=models.CharField(max_length=25,default='3 Days',blank=True)

    def __str__(self):
     return f'order_id:{self.id} order_state: {self.order_state} order_address={self.Address}'


