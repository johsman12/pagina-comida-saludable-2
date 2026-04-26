import { useState } from "react";
import "./Carrito.css";

const productosDisponibles = [
  {
    id: 1,
    nombre: "Ensalada Fresh",
    descripcionCorta: "Alimentación balanceada con ingredientes naturales.",
    descripcionLarga: "Una deliciosa mezcla de vegetales frescos con proteínas naturales, perfecta para mantener una alimentación balanceada.",
    precio: 8500,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
  {
    id: 2,
    nombre: "Mix de Frutas",
    descripcionCorta: "Ricas en vitaminas y antioxidantes.",
    descripcionLarga: "Selección de frutas naturales ricas en vitaminas y antioxidantes ideales para energizar tu día.",
    precio: 6000,
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400",
  },
  {
    id: 3,
    nombre: "Jugo Detox",
    descripcionCorta: "Refrescante y saludable para tu cuerpo.",
    descripcionLarga: "Bebida refrescante que ayuda a limpiar tu organismo y mejorar tu digestión de forma natural.",
    precio: 5000,
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400",
  },
];

function Productos() {
   //guarda los productos que el usuario ha agregado al carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  function agregar(producto) {
     // Verifica si el producto ya existe en el carrito
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
       // Si ya existe, solo aumenta
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
       // Si no existe, lo agrega al carrito 
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  function quitar(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  // suma precio * cantidad de cada produc
  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  );

  return (
    <div className="contenedor">
      <h2 className="titulo">Nuestros Productos Saludables</h2>

      <div className="productos">
        {productosDisponibles.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcionCorta}</p>
            <p>{producto.descripcionLarga}</p>
            <p>${producto.precio.toLocaleString()}</p>
            <button onClick={() => agregar(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      <div className="carrito-inicio">
        <h3 className="titulo">Tu Carrito</h3>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">No hay productos...</p>
        ) : (
          <>
            {/* Lista de productos en el carrito */}
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <span>{item.nombre}</span>
                <span>x{item.cantidad}</span>
                <span>${(item.precio * item.cantidad).toLocaleString()}</span>
                <button className="btn-quitar" onClick={() => quitar(item.id)}>
                  Quitar
                </button>
              </div>
            ))}
            <div className="carrito-total">
              <strong>Total: ${total.toLocaleString()}</strong>
            </div>

              {/* Lista de productos en el carrito */}
            <button className="btn-seguir">Comprar</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Productos;