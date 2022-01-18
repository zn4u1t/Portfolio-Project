import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyPages from './components/MyPages';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import GameApp from './pages/GameApp';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/Portfolio-Project'>
            <Header />
            <AboutMe />
            <Portfolio />
            <Experience />
            <MyPages />
            <Contacts />
          </Route>
          <Route path='/game'>
            <GameApp />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
