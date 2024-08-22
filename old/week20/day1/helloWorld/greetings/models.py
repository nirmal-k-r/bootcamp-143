from django.db import models
from django.db.models.signals import post_save,pre_save

class Users(models.Model):
    username=models.CharField(max_length=100, unique=True,primary_key=True)
    email=models.EmailField()
    password=models.CharField(max_length=100)
    
    def __str__(self):
        return self.username
    

class Sales(models.Model):
    product_name=models.CharField(max_length=100, unique=True, primary_key=True)
    quantity=models.IntegerField()
    unit_price=models.FloatField()
    total=models.FloatField()
    user=models.ForeignKey(Users,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.product_name
    
    # def discount(self,total):
    #     if total>1000:
    #         return True
    #     else:
    #         return False

    #validation methods
    def validate(self):
        if self.quantity>0 and self.unit_price>0:
            # pass
            self.save()
        else:
            raise ValueError("Quantity and unit price must be greater than 0")
    

#signals
def sale_saved(sender, instance, created, **kwargs):
    print(f'Sender : {sender} \nInstance : {instance} \nCreated : {created} \nKwargs : {kwargs}')
    print("Sale saved successfully")
    print("New sale count is ",Sales.objects.count())
    
def pre_sale_count(sender, instance, **kwargs):
    print("Old sale count is ",Sales.objects.count())

#bind signals
post_save.connect(receiver=sale_saved, sender=Sales)
pre_save.connect(receiver=pre_sale_count, sender=Sales)
