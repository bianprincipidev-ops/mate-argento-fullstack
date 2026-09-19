from django.contrib import admin
from .models import Categoria, Producto, BannerCarrusel

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'tipo')
    list_filter = ('tipo',)

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'precio', 'stock', 'destacado')
    list_filter = ('categoria', 'destacado')
    search_fields = ('nombre', 'descripcion')

@admin.register(BannerCarrusel)
class BannerCarruselAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'activo')
    list_filter = ('activo',)