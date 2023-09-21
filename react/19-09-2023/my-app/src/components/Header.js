import logo2 from '../logo2.png';

export default function Headers(){
    return(
    <header>
      <nav>
        <div className= "navbar">
          <div className="logo">
            <img src={logo2} alt=""/>
          </div>
          <div className="titulo">
             <li>Dropbox</li>
          </div>
          <div className="lista-1">
              <li>¿Por que Dropbox?</li>
              <li>Productos</li>
              <li>Soluciones</li>
              <li>Precios</li>
          </div>
          <div className="lista-2">
              <li>Contacto</li>
              <li>Obtener la aplicacion</li>
              <li>Registrarse</li>
              <li>Iniciar Sesion jejeje Hola</li>              
          </div>
          <div className="boton1">
              <button>Comenzar➡</button>
          </div>
        </div>
      </nav>
    </header>
    )
}