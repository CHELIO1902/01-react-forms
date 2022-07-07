import { Routes, Route, Link, useLocation } from 'react-router-dom'
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
              <Link to="/portLinkfto">Portafolio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portafolio" element={<Portafolio />}/>
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
    </>
  );
}

export default App;