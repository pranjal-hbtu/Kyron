import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Aihumen from "./components/Aihumen";
import Recruitment from "./components/Recruitment";
import Testcreation from "./components/Testcreation";
import Start from "./components/Start";



export default function SciencePage() {
    return (
<>
    <Navbar/>
   <Recruitment/>
   <Aihumen/>
   <Testcreation/>
   <Start/>
   <Footer/>
</>
    );
}