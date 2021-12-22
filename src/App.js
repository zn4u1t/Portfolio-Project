import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyPages from './components/MyPages';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header>
      </Header>
      <AboutMe />
      <Portfolio />
      <Experience />
      <MyPages />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
