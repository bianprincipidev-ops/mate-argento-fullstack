const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://127.0.0.1:8000/api/productos/'
    : 'https://mate-argento.com.ar/api/productos/'; // Ajusta esta URL si tu backend de Django en Hostinger corre en otra ruta o subdominio

export const obtenerProductos = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener los productos.');
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
};