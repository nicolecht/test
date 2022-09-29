from unittest.util import _MAX_LENGTH
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Pokemon(models.Model):
    pokemonId = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(16)])
    name = models.CharField(max_length=120)
    level = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(100)])
    hp = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)])
    attack = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)])
    defense = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)])
    element = models.TextField()
    owned = models.BooleanField(default=False)

    def _str_(self):
        return self.title

