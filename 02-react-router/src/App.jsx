import { Routes, Route, Link, useLocation, useParams, Outlet, useNavigate } from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            {/*En react no usamos la etiqueta A para los enlaces, ya que esta recargaria la pagina, entonces usamos el componente link de react-router-dom en su lugar y en vez de usar el atributo href usamos "to" */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portafolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portafolio" element={<Portafolio />}>
            <Route path=":pid" element={<PortafolioDetalle />}/>
          </Route>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path='*' element={<Error404/>} />
        </Routes>
        
        
        
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home</h1>
    </>
  );
}

function Portafolio() {
  return (
    <>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to="/portafolio/1">Pinterest</Link>
        </li>
        <li>
          <Link to="/portafolio/2">Cajero</Link>
        </li>
        <li>
          <Link to="/portafolio/3">Pokédex</Link>
        </li>
      </ul>
      {/*aqui queremos renderear nuestro contenido anidado */}
      <Outlet/>

    </>
  );
}

function PortafolioDetalle() {

  const proyectos = [
    { 
      id: 1, 
      nombre: "Pinterest", 
      desc: "Un clon de pinterest con HTML y CSS" ,
    },
    { 
      id: 2, 
      nombre: "Cajero", 
      desc: "Simulador de cajero autómatico con HTML, CSS y JS", 
    },
    { 
      id: 3, 
      nombre: "Pokédex", 
      desc: "Consumir la PokéAPI y mostrar un listado de Pokémons con HTML, CSS, y JS ",
    },
  ]

  let { pid } = useParams();
  const navigate = useNavigate()

  return (
    <>
      <h1>Portafolio Detalle</h1>
      <h3>ID: { proyectos[pid-1].id }</h3>
      <h3>Nombre: { proyectos[pid-1].nombre }</h3>
      <h3>Descripcion: { proyectos[pid-1].desc }</h3>
      <button onClick={() => {
        /* Link to='/portafolio' no funcionaria
      cuando quiero usar un enlace dentro de una logica de JS 
    necesito usar useNavigate (react router v6)*/
        navigate(-1)
        //si quiero ir a la pagina anterior del historial: navigate(-1)
        //si quiero ir a la pagina siguiente del historial: navigate(1)
      }}>
        Nos vamos al portafolio
        </button>
    </>
  );
}

function Contacto() {
  return (
    <>
      <h1>Contacto</h1>
    </>
  );
}

function Error404() {
  let location = useLocation();
  return (
    <>
      <h1>Error404</h1>
      <p>No encontre: {location.pathname} </p>
      <p><Link to="/">Regresa al Home</Link></p>
    </>
  );
}

export default App;