import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Login from './componentes/Login';
import "./App.css";

function App() {
  return (
    <>
      {/* Aquí combinamos: 
          Mantenemos los componentes de Master activos 
          y dejamos tu Login también.
      */}
      <Header />
      <Botones />
      
      <Login /> 
      
      <Productos />
      <Footer />
    </>
  );
}

export default App;