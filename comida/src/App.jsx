import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Login from './componentes/Login';
import "./App.css";

function App() {
  return (
    <>
      {/* Usamos estas llaves para "apagar" lo que no queremos ver.
          Si quitas las llaves de Header, volverá a aparecer arriba.
      */}
      
      {/* <Header /> */}
      {/* <Botones /> */}
      
      <Login /> 
      
      {/* <Productos /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;