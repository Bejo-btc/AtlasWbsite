import Header from '../component/header';
import './InfoPage.css';
import { Link } from 'react-router-dom';
import Houses_new from '../component/Houses_NEW';

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
                  <h1>عقارات أطلس</h1>
               </div>
           <Houses_new />
         </>
      </div>
   );
}

export default Info;