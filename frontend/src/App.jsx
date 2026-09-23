import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { obtenerProductos } from './services/productoService';

function App() {
  const { t } = useTranslation();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setLoading(false);
      });
  }, []);

  // VISTA DEL DETALLE
  if (selectedProduct) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F5EFEB', padding: '2rem', fontFamily: 'sans-serif', color: '#2F4156' }}>
        <button
          onClick={() => setSelectedProduct(null)}
          style={{ marginBottom: '1.5rem', backgroundColor: '#2F4156', color: '#FFFFFF', padding: '0.6rem 1.2rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          ← Volver al Catálogo
        </button>

        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'row', gap: '2rem', border: '1px solid #C8D9E6' }}>
          
          <div style={{ width: '50%', backgroundColor: '#f9f9f9', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid #eee' }}>
            {selectedProduct.imagen ? (
              <img src={selectedProduct.imagen} alt={selectedProduct.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            ) : (
              <span style={{ color: '#888' }}>🧉 Sin imagen</span>
            )}
          </div>

          <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2F4156', marginBottom: '1rem' }}>{selectedProduct.nombre}</h1>
              <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '1.5rem' }}>{selectedProduct.descripcion}</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#567C8D', marginBottom: '0.5rem' }}>${selectedProduct.precio}</p>
              <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '2rem' }}>Stock disponible: {selectedProduct.stock}</p>
            </div>
            
            <button 
              onClick={() => alert('¡Pronto sumaremos el carrito!')}
              style={{ width: '100%', backgroundColor: '#2F4156', color: '#FFFFFF', padding: '0.8rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Agregar al Carrito
            </button>
          </div>

        </div>
      </div>
    );
  }

return (
    <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: '#F5EFEB', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', color: '#2F4156', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
      
      {/* 1. BARRA SUPERIOR (Navbar) */}
      <header style={{ backgroundColor: '#2F4156', color: '#FFFFFF', padding: '1rem 2rem', width: '100%', boxSizing: 'border-box', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '8px', overflow: 'hidden' }}>
            <input 
              type="text" 
              placeholder="Buscar..." 
              style={{ padding: '0.5rem 1rem', border: 'none', outline: 'none', fontSize: '0.9rem', color: '#333' }}
            />
            <button style={{ backgroundColor: '#567C8D', color: '#FFFFFF', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              🔍
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Mate Argento</span>
            <img 
              src="/logo.jpeg" 
              alt="Mate Argento Logo" 
              style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #C8D9E6' }}
            />
          </div>

        </div>
      </header>

      {/* 2. FRANJA RECTANGULAR DEL TÍTULO (ANCHO COMPLETO) */}
      <div style={{ backgroundColor: '#FFFFFF', width: '100vw', padding: '1.25rem 2rem', borderBottom: '1px solid #C8D9E6', textAlign: 'center', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2F4156', marginBottom: '0.3rem' }}>🧉 {t('title')}</h1>
          <p style={{ fontSize: '0.95rem', color: '#567C8D', marginBottom: '0.2rem' }}>{t('subtitle')}</p>
          <p style={{ fontSize: '0.75rem', color: '#888' }}>{t('api_status')}</p>
        </div>
      </div>

      {/* 3. CONTENEDOR PRINCIPAL: SIDEBAR + CATÁLOGO */}
      <div style={{ display: 'flex', flex: 1, maxWidth: '1300px', margin: '0 auto', width: '100%', padding: '2rem 1rem', gap: '2rem', boxSizing: 'border-box' }}>
        
        {/* SIDEBAR A LA IZQUIERDA */}
        <aside style={{ width: '260px', flexShrink: 0, backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.04)', border: '1px solid #C8D9E6', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2F4156', marginBottom: '1rem', borderBottom: '2px solid #F5EFEB', paddingBottom: '0.5rem' }}>
            Navegación
          </h3>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#2F4156', fontWeight: '600', display: 'block', padding: '0.4rem 0' }}>
                📦 Todos los Productos
              </a>
            </li>
            
            <li style={{ marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#567C8D', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Categorías
              </span>
              
              <div style={{ paddingLeft: '1rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '2px solid #C8D9E6' }}>
                <div>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#2F4156' }}>Mates Pintados</span>
                  <div style={{ paddingLeft: '0.8rem', marginTop: '0.3rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <a href="#" style={{ textDecoration: 'none', fontSize: '0.85rem', color: '#666' }}>• Por menor</a>
                    <a href="#" style={{ textDecoration: 'none', fontSize: '0.85rem', color: '#666' }}>• Por mayor</a>
                  </div>
                </div>

                <div style={{ marginTop: '0.3rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#2F4156' }}>Mates Crudos</span>
                  <div style={{ paddingLeft: '0.8rem', marginTop: '0.3rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <a href="#" style={{ textDecoration: 'none', fontSize: '0.85rem', color: '#666' }}>• Por menor</a>
                    <a href="#" style={{ textDecoration: 'none', fontSize: '0.85rem', color: '#666' }}>• Por mayor</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </aside>

        {/* CATÁLOGO DE PRODUCTOS A LA DERECHA */}
        <main style={{ flex: 1 }}>
          {loading ? (
            <p style={{ color: '#567C8D' }}>{t('loading')}</p>
          ) : productos.length === 0 ? (
            <p style={{ color: '#567C8D' }}>{t('no_products')}</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1.25rem' }}>
              {productos.map((producto) => (
                <div key={producto.id} style={{ backgroundColor: '#FFFFFF', border: '1px solid #C8D9E6', borderRadius: '12px', padding: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', aspectRatio: '1 / 1.1' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2F4156', marginBottom: '0.4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{producto.nombre}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{producto.descripcion}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#567C8D', marginBottom: '0.3rem' }}>{t('price')}: ${producto.precio}</p>
                    <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.8rem' }}>{t('stock')}: {producto.stock}</p>
                    <button 
                      onClick={() => setSelectedProduct(producto)}
                      className="bg-[#2F4156] text-white py-2 px-4 rounded hover:bg-[#1f2b38] transition"
                    >
                      Ver Producto
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;