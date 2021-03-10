import Home from './pages/home';
import Contact from './pages/contact';
import Location from './pages/location';
import Navigation from './components/navigation';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <>
      <Navigation />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/location/:id">
              <Location />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
