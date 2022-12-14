from itertools import product
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
StatusEnum = (
    ("PENDING", "pending"),
    ("DELIVERED", "delivered")
)
StatusPre = (
    ("PREPARANDO", "preparando"),
    ("LISTO", "listo")
)


class Order(models.Model):
    table =models.ForeignKey(
        'tables.Table', on_delete=models.SET_NULL, null=True, blank=True
    )
    product = models.ForeignKey(
        'products.Product', on_delete=models.SET_NULL, null=True, blank=True
    )
    payment = models.ForeignKey(
        'payments.Payment', on_delete=models.CASCADE, null=True, blank=True
    )
    status = models.CharField(max_length=255, choices=StatusEnum)
    preparacion = models.CharField(max_length=255, choices=StatusPre, default="PREPARANDO")
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)
    

    def __str__(self):
        return str(self.table)
