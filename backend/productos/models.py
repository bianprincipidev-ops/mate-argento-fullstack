from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100) # Ej: por mayor, por menor,, accesorios, etc.
    tipo = models.CharField(max_length=50, choices=[('mayor', 'Por Mayor'), ('menor', 'Por Menor')])

    def __str__(self):
        return f"{self.nombre} ({self.tipo})"

class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='productos')
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)
    destacado = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre

class BannerCarrusel(models.Model):
    titulo = models.CharField(max_length=150, blank=True, null=True)
    imagen = models.ImageField(upload_to='banner/')
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo or f"Banner {self.id}"