# Generated by Django 3.2.7 on 2022-04-21 19:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecommarce', '0014_auto_20220421_2101'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='Product_state',
            new_name='order_state',
        ),
    ]