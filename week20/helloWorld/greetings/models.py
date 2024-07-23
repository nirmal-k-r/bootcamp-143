from django.db import models

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
    
    def discount(self,total):
        if total>1000:
            return True
        else:
            return False
