import Header from '../component/header';
import './InfoPage.css';
import { Link } from 'react-router-dom';
import AccordionSlider from "./AccordionSlider";


function Info() {
   return (
      <div className="info-container">
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
             <div className="houses-header">
                  <select name="تصفيه" id="">تصفيه</select>
                  <h1>عقارات أطلس</h1>
               </div>
            {/* cards section */}
          <AccordionSlider />
            {/* houses */}
           
         </>
      </div>
   );
}

export default Info;