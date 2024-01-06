//isme render krte h saare pages ko like login page or checkout page etc
import './App.css';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import CheckOut from './components/CheckOut';

function App() {
  return (
   
    <div className='app'>

      <Router>

        <Switch>

        <Route path='/checkOut'>
            <CheckOut />
          </Route>
          
        <Route path='/login'>
            <Login />
          </Route>


          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>

  );
}

export default App;
