# Generated by Django 4.1 on 2022-11-28 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_order_payment'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='preparacion',
            field=models.CharField(choices=[('PREPARANDO', 'preparando'), ('LISTO', 'listo')], default='PREPARANDO', max_length=255),
        ),
    ]
