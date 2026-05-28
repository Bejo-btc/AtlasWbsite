import './App.css';
import { Routes, Route } from 'react-router-dom'; // 1. إضافة نظام المسارات
import Landing from './component/Landing';
import Hero from './component/Hero';
import Houses from './component/Houses';
import About from './component/About';
import Rentmanegment from './component/Rentmanegment';
import Support from './component/Support';
import Footer from "./component/footer/Footer"
import InfoPage from "./Info/InfoPage"; // 2. استيراد الصفحة التي تريد الذهاب إليها
import Homes from './realestate/homes';
import Contact from "./contact/contact"
import Houses_new from "./component/Houses_NEW";
function App() {
  return (
    <div>
      {/* 3. استخدام Routes لتنظيم التنقل بين الصفحات */}
      <Routes>
        {/* الصفحة الرئيسية (/) تعرض كل المكونات */}
        <Route path="/" element={
          <>
            <Landing />
            <Hero />
            <Houses />
            <About />
            <Rentmanegment />
            <Support />
            <Footer />
          </>
        } />

        {/* صفحة المعلومات (/InfoPage) تعرض مكون InfoPage فقط */}
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path='/homes' element={<Homes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/houses" element={<Houses_new />} />
      </Routes>
    </div>
  );
}

export default App;