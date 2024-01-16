import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RecruitPage from "./pages/RecruitPage/RecruitPage";
import SciencePage from "./pages/SciencePage/SciencePage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import EventPage from "./pages/EventPage/EventPage";
import ContactusPage from  './pages/ContactusPage/ContactusPage';
import FaqPage from './pages/FaqPage/FaqPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
      
    
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
