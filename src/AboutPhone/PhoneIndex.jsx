import React from 'react';
import './phon-css.css';
import Header from '../component/header';
import Footer from '../component/footer/Footer';
import AccordionSlider from '../component/AccordionSlider';

function PhoneIndex() {
   return (
      <div >
         <div className="info-img">
            <Header />
            <div className="info-content">
               <div>
                  <h1>عقارات أطلس</h1>
                  <p>مجموعة من العقارات المعروضة بعناية بمعلومات واضحة لمساعدتك على اتخاذ قرارك بثقة</p>
               </div>
            </div>
         </div>
         {/* cards section */}
         <div className="info-cards">
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663194.webP" alt="card" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span>//</span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663196.webP" alt="card-img" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span>//</span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663197.webP" alt="card-img" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span>//</span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
         </div>
         {/* houses */}
         <div className="houses">
            <div className="houses-header">
               <select name="تصفيه" id="">تصفيه</select>
               <h1>عقارات أطلس</h1>
            </div>
            <AccordionSlider />
         </div>
         {/* community */}
         <div className="community">
            <div className="community-content">
               <h1>مجمع أطلس السكني</h1>
               <p>وحدات سكنيه مصممه للراحه اليوميه ، بمواقع مدروسه وتشطيب عملي يناسب العائلات  </p>
            </div>
         </div>
         {/* footer */}
         <Footer />
      </div>
   );
}

export default PhoneIndex;
