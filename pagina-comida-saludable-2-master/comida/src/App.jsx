import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Home from "./componentes/Home";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Carrito from "./componentes/Carrito";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Botones />
      <Home />
      <Productos />
      <Carrito/>
      <Footer />
    </>
  );
}

export default App;