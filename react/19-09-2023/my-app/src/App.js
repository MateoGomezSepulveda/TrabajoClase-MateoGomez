import logo2 from './logo2.png';
import './App.css';

function App() {
  return (
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
      <main class="main-content">
        <div class="texto-1">
            <li>únete a los mas de 700 millones de usuarios resgistrados que confian en Dropbox</li>
        </div>
        <div class="texto-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sunt iure, quaerat sequi libero ut, quis illo vero nobis quos, esse neque explicabo voluptatem. Soluta quis sapiente perferendis maxime commodi.</li>
        </div>
        <div className="boton2">
              <button>Encuentra Tu Plan ➡</button>
        </div>
        <div className='Video'>
          <p>jijij</p>
        </div>
      </main>
    </header>
    
  );
}

export default App;
