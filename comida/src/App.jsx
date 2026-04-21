import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Login from './componentes/Login';
import Registro from './componentes/Registro'; // Importa el componente de Registro
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Botones />
      
      <Login /> 
      
      <Productos />
      <Footer />
    </>
  );
}

export default App;