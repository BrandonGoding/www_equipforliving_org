# Generated by Django 5.0.4 on 2024-05-12 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equip_for_living', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='eventdate',
            options={'ordering': ['date']},
        ),
        migrations.AlterModelOptions(
            name='registration',
            options={'ordering': ['last_name', 'first_name']},
        ),
        migrations.AlterField(
            model_name='registration',
            name='registration_type',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='registration',
            name='volunteer_preference',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
