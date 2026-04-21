import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
<<<<<<< HEAD
import Home from "./componentes/Home";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
=======
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Login from './componentes/Login';
>>>>>>> juliana
import "./App.css";

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Botones />
      <Home />
=======
      {/* Aquí combinamos: 
          Mantenemos los componentes de Master activos 
          y dejamos tu Login también.
      */}
      <Header />
      <Botones />
      
      <Login /> 
      
>>>>>>> juliana
      <Productos />
      <Footer />
    </>
  );
}

export default App;