import './App.css';
import Contact from './components/contact';
import { Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Links from './components/Links';

function App() {

  return (
    <>
      <Header />
      <Links />
      <Footer />
    </>
  );
}

export default App;
