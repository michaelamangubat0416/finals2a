from django.db import models

# Create your models here.

class Item(models.Model):
    first_name=models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    contact_num = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=150, null=True)
    address = models.CharField(max_length=150, null=True)
    zip_code = models.CharField(max_length=100, null=True)
    date_of_birth = models.DateField(max_length=100, null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    blood_type = models.CharField(max_length=100, null=True)
    fathers_given_name = models.CharField(max_length=100, null=True)
    fathers_middle_name = models.CharField(max_length=100, null=True)
    fathers_last_name = models.CharField(max_length=100, null=True)
    date_of_birth2 = models.DateField(max_length=100, null=True)
    civil_status2 = models.CharField(max_length=100, null=True)
    blood_type2 = models.CharField(max_length=100, null=True)
    occupation = models.CharField(max_length=100, null=True)
    contact_number2 = models.CharField(max_length=100, null=True)
    mothers_given_name = models.CharField(max_length=100, null=True)
    mothers_middle_name = models.CharField(max_length=100, null=True)
    mothers_last_name = models.CharField(max_length=100, null=True)
    date_of_birth3 = models.DateField(max_length=100, null=True)
    civil_status3 = models.CharField(max_length=100, null=True)
    blood_type3 = models.CharField(max_length=100, null=True)
    occupation2 = models.CharField(max_length=100, null=True)
    contact_number3 = models.CharField(max_length=100, null=True)
    elementary = models.CharField(max_length=100, null=True)
    secondary = models.CharField(max_length=100, null=True)
    college = models.CharField(max_length=100, null=True)

    
    def __str__(self) -> str:
        return super().__str__()
    

    