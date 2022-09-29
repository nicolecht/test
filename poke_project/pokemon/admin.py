from django.contrib import admin
from .models import Pokemon

class PokemonAdmin(admin.ModelAdmin):
    list_display = ('pokemonId', 'name', 'level', 'hp', 'attack', 'defense', 'element', 'owned')

# Register your models here.

admin.site.register(Pokemon, PokemonAdmin)