// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Main from './Main';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Garden from './Garden';
import Seasonal from './Seasonal';
import Interior from './Interior';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return(
      <Router>
      <div className='container'>
          {/* <header className='row'>
            <div className='col-sm-12'>
              <Main/>
            </div>
          </header> */}
          <main className='row'>
            <div className='col-sm-12'>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/Garden" component={Garden} />
              <Route exact path="/Interior" component={Interior} />
              <Route exact path="/Seasonal" component={Seasonal} />
            </Switch>
            </div>
          </main>
          <footer className='row'>
            <div className='col-sm-12'>
              <Footer/>
            </div>
          </footer>
      </div>
    </Router>
  );
}

export default App;
