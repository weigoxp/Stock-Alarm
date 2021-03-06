# Generated by Django 3.0.2 on 2020-04-05 05:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('user_name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Watchlist',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='src.User')),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('stock_name', models.CharField(max_length=50)),
                ('direction', models.BooleanField(blank=True, default=None, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=4, default=None, max_digits=15, null=True)),
                ('watchlist_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='src.Watchlist')),
            ],
        ),
    ]
