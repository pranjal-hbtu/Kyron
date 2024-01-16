import Skill from "./components/Skill"
import Discovery from './components/Discovery'
import Examplatform from './components/Examplatform'
import Proctoring from './components/Proctoring'
import Assesments from './components/Assesments'
import Tracking from './components/Tracking'
import Shedule from './components/Shedule'
import Demo from "./components/Demo"

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function RecruitPage() {
  return (
    <>
 <Navbar/>
 <Demo/>
 <Skill/>
 <Discovery/>
 <Examplatform/>
 <Proctoring/>
 <Assesments/>
 <Tracking/>
 <Shedule/>
 <Footer/>
    </>
  );
}
