import Header from '../component/header';
import './InfoPage.css';
import { Link } from 'react-router-dom';
import AccordionSlider from "./AccordionSlider";
import Footer from '../component/footer/Footer';

function Info() {
   return (
      <div className="infoContainer">
         <>
            {/* header section */}
            <div className="info-img">
               <div className="info-header">
                  <Header />
               </div>
               <div className="info-content">
                  <div>
                     <h1>عقارات أطلس</h1>
                     <p>مجموعة من العقارات المعروضة بعناية بمعلومات واضحة لمساعدتك على اتخاذ قرارك بثقة</p>
                  </div>
               </div>
            </div>
            {/*  */}
            {/* cards section */}
            <div className='card-flex'>
               <div className="house-card-info">
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663194.webP" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <div className="location">
                           <h6>الخرطوم الحي الصحافة </h6>
                        </div>
                        <p>البيع: ١.٧ مليون جنية سوداني </p>
                     </div>
                     <img src="/Frame 2085663196.webP" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663197.webP" alt="home-img" className="home-img" />
                  </div>

               </div>
            </div>

            <div className="houses-header">
               <select name="تصفيه" id="">تصفيه</select>
               <h1>عقارات أطلس</h1>
            </div>
            {/* cards section */}
            <AccordionSlider />

            {/* community */}
            <div className="community">
               <div className="community-content">
                  <h1>مجمع أطلس السكني</h1>
                  <p>وحدات سكنيه مصممه للراحه اليوميه ، بمواقع مدروسه وتشطيب عملي يناسب العائلات  </p>
               </div>
            </div>
            {/*  */}
            <Footer />

         </>
      </div>
   );
}

export default Info;