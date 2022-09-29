from rest_framework import serializers
from .models import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ('id', 'pokemonId', 'name', 'level', 'hp', 'attack', 'defense', 'element', 'owned')