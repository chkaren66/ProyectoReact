import './App.css';
// import Card from './componentes/Card';
import Cabecera from './componentes/Cabecera';
import Contador from './componentes/Contador';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
       {/* <h2>hola mundo</h2> */}
       {/* <Card/> */}
       <Cabecera
         titulo="Hola Fabricio"
         contenido="lorem "
                />
       <Formulario/>
       <Cabecera
         titulo="Mira estoy reutilizando componentes"
         contenido="lorem  "
                />
                {/* pasar numero {2021} */}

        
      <Contador/>
    </div>
  );
}

export default App;
