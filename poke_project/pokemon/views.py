from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PokemonSerializer
from .models import Pokemon

# Create your views here.

class PokemonView(viewsets.ModelViewSet):
    serializer_class = PokemonSerializer
    queryset = Pokemon.objects.all()