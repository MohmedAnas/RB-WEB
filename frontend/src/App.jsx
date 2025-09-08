import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from "react-hot-toast";

// Component imports (all your original imports)
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Shop from './pages/Shop.jsx';
import BusyTutorialVideo from './pages/BusyTutorialVideo.jsx';
import Payment from './pages/Payment.jsx';
import Feedback from './pages/Feedback.jsx';
import FreeTrial from './pages/FreeTrial.jsx';

// Industry pages
import FMCG from './pages/industries/FMCG.jsx';
import Garments from './pages/industries/Garments.jsx';
import PaperMill from './pages/industries/PaperMill.jsx';
import AutoPartsPage from './pages/industries/AutoPartsPage.jsx';
import Retail from './pages/industries/Retail.jsx';
import ChemicalIndustryPage from './pages/industries/ChemicalIndustryPage.jsx';
import BookPublishingPage from './pages/industries/BookPublishingPage.jsx';
import ElectricalShopPage from './pages/industries/ElectricalShopPage.jsx';
import FB from './pages/industries/FB.jsx';
import Travel from './pages/industries/Travel.jsx';
import Furniture from './pages/industries/Furniture.jsx';
import Pharmacy from './pages/industries/Pharmacy.jsx';
import Paint from './pages/industries/Paint.jsx';
import Mobile from './pages/industries/Mobile.jsx';
import Jewellery from './pages/industries/Jewellery.jsx';
import Agriculture from './pages/industries/Agriculture.jsx';
import Stationery from './pages/industries/Stationery.jsx';

// Services
import FinancialAccounting from './pages/Service & Solution/FinancialAccounting.jsx';
import InventoryManagement from './pages/Service & Solution/InventoryManagement.jsx';

// GST & TDS
import GstBasics from './pages/Service & Solution/GstBasics.jsx';
import EWayBill from './pages/Service & Solution/EWayBill.jsx';
import GstReturns from './pages/Service & Solution/GstReturns.jsx';
import GstInvoicingGuide from './pages/Service & Solution/GstInvoicingGuide.jsx';
import Tds from './pages/Service & Solution/Tds.jsx';

// Add-Ons & Webinars
import AddOns from './pages/AddOns.jsx';
import Webinars from './pages/Webinars.jsx';
import ContactUs from './pages/ContactUs.jsx';

// New import for the QueryPanel
import QueryPanel from './pages/Querypanel.jsx';
import AdminLogin from './components/AdminLogin'; // adjust path as needed


const pageVariants = {
  initial: { opacity: 0, clipPath: 'circle(5% at 50% 50%)' },
  animate: {
    opacity: 1,
    clipPath: 'circle(150% at 50% 50%)',
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    clipPath: 'circle(5% at 50% 50%)',
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
};


// --- MAIN PAGE SYSTEM ---
const MainApp = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Routes>
              {/* General Pages */}
              <Route path="/" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/gallery" element={<BusyTutorialVideo />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/freetrial" element={<FreeTrial />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/enquiry" element={<Feedback />} /> 
              {/* Industry Pages */}
              <Route path="/fmcg" element={<FMCG />} />
              <Route path="/garments" element={<Garments />} />
              <Route path="/papermill" element={<PaperMill />} />
              <Route path="/retail" element={<Retail />} />
              <Route path="/autoparts" element={<AutoPartsPage />} />
              <Route path="/chemical" element={<ChemicalIndustryPage />} />
              <Route path="/bookpublishing" element={<BookPublishingPage />} />
              <Route path="/electricalgoods" element={<ElectricalShopPage />} />
              <Route path="/fb" element={<FB />} />
              <Route path="/pharmacy" element={<Pharmacy />} />
              <Route path="/paint" element={<Paint />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/furniture" element={<Furniture />} />
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/agriculture" element={<Agriculture />} />
              <Route path="/stationery" element={<Stationery />} />
              {/* Services */}
              <Route path="/financialaccounting" element={<FinancialAccounting />} />
              <Route path="/inventorymanagement" element={<InventoryManagement />} />
              {/* GST & TDS */}
              <Route path="/gstbasics" element={<GstBasics />} />
              <Route path="/ewaybill" element={<EWayBill />} />
              <Route path="/gstreturns" element={<GstReturns />} />
              <Route path="/gstinvoicing" element={<GstInvoicingGuide />} />
              <Route path="/tds" element={<Tds />} />
              {/* Add-Ons & Webinars */}
              <Route path="/addons" element={<AddOns />} />
              <Route path="/webinars" element={<Webinars />} />
              {/* Secret token QueryPanel route */}
              <Route path="/admin" element={<AdminLogin />} /> 
              <Route path="/querypanel" element={<QueryPanel />} />
              {/* Fallback: unknown routes */}
              <Route path="*" element={<AboutUs />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <MainApp />
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
