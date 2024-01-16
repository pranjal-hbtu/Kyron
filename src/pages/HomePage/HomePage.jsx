import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Aiskill from "./components/Aiskill"
import Ourclinet from "./components/Ourclinet"
import Testimonial from "./components/Testimonial"
import Start from "./components/Start"
import Header from "./components/Header"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Aiskill />
      <Ourclinet />
      <Testimonial />
      <Start />
      <Footer />
    </>
  );
}
