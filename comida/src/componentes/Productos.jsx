function Productos() {
  return (
    <div className="contenedor">
      <h2 className="titulo">Nuestros Productos Saludables</h2>

      <div className="productos">

        <div className="producto">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" />
          <h3>Ensalada Fresh</h3>
          <p>
            Una deliciosa mezcla de vegetales frescos con proteínas naturales,
            perfecta para mantener una alimentación balanceada.
          </p>
        </div>

        <div className="producto">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400" />
          <h3>Mix de Frutas</h3>
          <p>
            Selección de frutas naturales ricas en vitaminas y antioxidantes
            ideales para energizar tu día.
          </p>
        </div>

        <div className="producto">
          <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400" />
          <h3>Jugo Detox</h3>
          <p>
            Bebida refrescante que ayuda a limpiar tu organismo y mejorar tu
            digestión de forma natural.
          </p>
        </div>
        <div className="producto">
          <img src="https://i.pinimg.com/1200x/f6/1f/29/f61f294494ad722c44e8b97892df10a2.jpg"/>
          <h3>Aneva Cremosa</h3>
          <p>una bebida suave y nutritiva preparada con avena integral, un toque de canela fresca y miel organica.</p>

        </div>
      </div>
    </div>
  );
}


export default Productos;