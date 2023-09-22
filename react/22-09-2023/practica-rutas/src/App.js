import React, {Fragment} from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

import Home from './Components/Home';
import Galery from './Components/Galery'
import About from './Components/About'

function App (){
  return(
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/home'>
                Pagina Principal
              </Link>
            </li>
            <li>
              <Link to='/gallery'>
                Galeria
              </Link>
            </li>
            <li>
              <Link to='/about'>
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/gallery'>
            <Galery></Galery>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>  
        </Switch>
      </Router>
      <footer>Soy un pie de pagina </footer>
    </Fragment>
  )
}

export default App;