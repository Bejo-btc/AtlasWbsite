import Header from '../component/header';
import './InfoPage.css';
import { Link } from 'react-router-dom';
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
            {/* cards section */}
            <div className="house-card">

               <div className='home-card'>
                  <div className="home-info">
                     <h6>خبره واسعه في السوق</h6>
                     <span>تفقد العقارات</span>
                  </div>
                  <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
               </div>
               <div className='home-card'>
                  <div className="home-info">
                     <h6>خبره واسعه في السوق</h6>
                     <span>تفقد العقارات</span>
                  </div>
                  <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
               </div>
               <div className='home-card'>
                  <div className="home-info">
                     <h6>خبره واسعه في السوق</h6>
                     <span>تفقد العقارات</span>
                  </div>
                  <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
               </div>

            </div>
            {/* houses */}
            <div className="houses">
               <div className="houses-header">
                  <select name="تصفيه" id="">تصفيه</select>
                  <h1>عقارات أطلس</h1>
               </div>
               <div className='card-flex'>
                  <div className="house-card">
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="\Frame 2085663186.png" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="\Frame 2085663188.webp" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="\Frame 2085663187.webp" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="\Frame 2085663188.webp" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="\Frame 2085663187.webp" alt="home-img" className="home-img" />
                     </div>
                     <div className='home-card'>
                        <div className="home-info">
                           <h6>خبره واسعه في السوق</h6>
                           <span>تفقد العقارات</span>
                        </div>
                        <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
                     </div>
                  </div>
               </div>
               <div className='houses-btn'>
                  <Link to='/homes'><button>أبدء رحلتك العقارية</button></Link>
               </div>
            </div>
         </>
      </div>
   );
}

export default Info;