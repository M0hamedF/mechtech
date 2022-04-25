# Generated by Django 3.2.7 on 2022-04-21 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommarce', '0013_auto_20220419_2222'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='reviews',
            field=models.JSONField(default=[]),
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('Product_state', models.CharField(choices=[('Pending', 'Pending'), ('Charging', 'Charging'), ('Delivery in progess', 'Delivery in progess'), ('Delivered', 'Delivered')], max_length=100)),
                ('Address', models.JSONField(default=[])),
                ('order_time', models.DateTimeField(auto_now_add=True)),
                ('order_duration', models.CharField(blank=True, default='3 Days', max_length=25)),
                ('Products', models.ManyToManyField(related_name='products', to='ecommarce.Products')),
            ],
        ),
    ]