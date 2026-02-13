from django.contrib import admin
from api.models import Company,Employee

# Register your models here.
class ComanyAdmin(admin.ModelAdmin):
    list_display = ('name','location','type')


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name','address','phone_no')

admin.site.register(Company,ComanyAdmin)
admin.site.register(Employee,EmployeeAdmin)
