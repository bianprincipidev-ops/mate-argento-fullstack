from rest_framework import viewsets
from .models import Categoria, Producto, BannerCarrusel
from .serializers import CategoriaSerializer, ProductoSerializer, BannerCarruselSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class BannerCarruselViewSet(viewsets.ModelViewSet):
    queryset = BannerCarrusel.objects.all()
    serializer_class = BannerCarruselSerializer
