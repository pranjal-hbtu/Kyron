
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import About from './components/About';
import Whyk from './components/Whyk';
import Technology from './components/Technology';
import Cards from './components/Cards';



export default function CompanyPage() {
    return (
      <>
         <Navbar/>
        <About />
        <Whyk/>
        <Technology/>
        <Cards/>
        <Footer/>
      </>
    );
  }