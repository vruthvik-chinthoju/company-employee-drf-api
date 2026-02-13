from django.db import models

# Create your models here.

class Company(models.Model):
    company_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    about = models.TextField()
    type = models.CharField(max_length=100,choices=(('IT','it'),
                                                    ('Non-It','non-It'),
                                                    ("Mobile-phones","mobile-phones"),
                                                    ("Hr","hr")))

    added_date = models.DateField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name + "--" + self.location


class Employee(models.Model):
    emp_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email_id = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    phone_no = models.CharField(max_length=10)
    about = models.TextField()
    position = models.CharField(max_length=50,choices=(('Manager','manager'),('developer','developer'),("tester","tester")))
    
    company = models.ForeignKey(Company,on_delete=models.CASCADE)



