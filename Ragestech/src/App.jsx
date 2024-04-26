
import { BrowserRouter } from 'react-router-dom';
import "./App.css"
import Nav from './Component/nav';
import Hero from './Component/Hero';
import Product from './Component/Product';
import News from './Component/News';
import About from './Component/about';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Hero />
        <Product />
        <News/>
        <About/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;