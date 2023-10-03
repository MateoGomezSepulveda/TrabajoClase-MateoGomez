import './App.css';
import Read from './Components/read';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Update from './Components/update';
import Create from './Components/create';

function App() {
  return (
    <Router>
      <div className='main'>
        <h2 className='main-header'>Trabajo de CL</h2>
        <div>
        <Route exact path='/create' component={Create}></Route>
        </div>
        <div style={{marginTop:20}}>
          <Route exact path='/' component={Read}></Route>
          <Route exact path='/update' component={Update}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
