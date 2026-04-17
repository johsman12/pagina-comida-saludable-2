import "./Header.css";
import logoNutrick from "./img/logoNutrick.png";
import avatar from "./img/avatar.png";
import carrito from "./img/carrito.png";

function Header() {
  return (
    <header className="header-container">
      <div className="fila-superior">
      <div className="logo">
        <img className="img-logo" src={logoNutrick} alt="Logo" title="img" />
      </div>

      <form className="buscador">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
      <div className="grupo-iconos">
        <div className="icono-user"  >
          <img className="user" src={avatar} alt="Avatar" />
        </div>
        <div className="icono-carrito">
          <img className="carrito" src={carrito} alt="Carrito" />
        </div>
      </div>






      </div>
      <nav className="navegacion">
        <ul>
          <button className="btn-nav"><a href="">inicio</a></button>
          <button className="btn-nav"><a href="">recetas</a></button>
          <button className="btn-nav"><a href="">contacto</a></button>

        </ul>
      </nav>

    </header>
  );
}

export default Header;