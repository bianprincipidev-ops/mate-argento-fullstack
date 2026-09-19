from rest_framework import serializers
from .models import Categoria, Producto, BannerCarrusel

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.ReadOnlyField(source='categoria.nombre')
    class Meta:
        model = Producto
        fields = '__all__'

class BannerCarruselSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerCarrusel
        fields = '__all__'

