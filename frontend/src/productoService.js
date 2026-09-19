const API_URL = 'http://127.0.0.1:8000/api/productos/';

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