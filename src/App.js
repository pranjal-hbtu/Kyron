import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RecruitPage from "./pages/RecruitPage/RecruitPage";
import SciencePage from "./pages/SciencePage/SciencePage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import EventPage from "./pages/EventPage/EventPage";
import ContactusPage from "./pages/ContactusPage/ContactusPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <div className="mb-12">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
