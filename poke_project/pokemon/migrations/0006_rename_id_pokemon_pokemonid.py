# Generated by Django 4.1.1 on 2022-09-26 13:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0005_alter_pokemon_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pokemon',
            old_name='id',
            new_name='pokemonId',
        ),
    ]
