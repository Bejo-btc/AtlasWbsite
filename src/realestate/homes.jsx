import React from 'react';
import { Link } from 'react-router-dom';
import './homes.css';
import Header from '../component/header';

function Homes() {
   return (
      <div className="homes-container">
         <div className="real-estate">
            <Header />
            <div className="land-info">
               <h2>شقة سكنية – حي الصحافة – الخرطوم</h2>
               <p>عقار مميز في قلب حي الصحافة، بتشطيب فاخر ومساحات عملية تناسب العائلات. قريب من الخدمات الأساسية والمرافق الحيوية، ويوفر بيئة سكنية هادئة ومريحة.</p>
            </div>
         </div>
         <div className="real-estate-info">
            <div>
               <img src="/land-img.png" alt="real-estate-info-img" />
            </div>
            <div>
               <div className="cards">
                  <div className="card">
                     <div>
                        <h3>السعر</h3>
                        <span>للإيجار </span>
                     </div>
                     <p>السعر: ١.٧ مليون سوداني </p>
                  </div>
                  <div className="card">
                     <div>
                        <h3>مزقت االايجار</h3>
                        <span>موقع الخرائط </span>
                     </div>
                     <p> الخرطوم  – حي الصحافة – شارع الصحافه</p>
                  </div>
                  <div className="card">
                     <div>
                        <h3>معلومات</h3>
                        <span>التزام بالمتابعه </span>
                     </div>
                     <div>
                        <p>180المساحه :</p>
                        <p> الغرف : ٣ </p>
                        <p>الحمامات : ٣</p>
                        <p>الطابق : الثاني </p>
                        <p>حاله العقار : جاهز للن</p>
                     </div>
                  </div>
                  <div className="card">
                     <div>
                        <h3>مميزات العقار</h3>
                        <span>التزام بالمتابعه </span>
                     </div>
                     <p>تكييف مركزي - مطبخ جاهز - إناره حديثه - بلكونه </p>
                  </div>
               </div>
            </div>
         </div>
         {/* Buliding section */}
         <div className="buliding">
            <h1>صور التشطيبات</h1>
            <div className="buliding-imgs">
               <img src="/Frame 2085663200.png" alt="buliding-img" />
               <img src="/Frame 2085663201.webP" alt="buliding-img" />
               <img src="/Frame 2085663202.webP" alt="buliding-img" />
               <img src="/Frame 2085663203.webP" alt="buliding-img" />
            </div>
            <div className="buliding-btn">
               <Link to="./contact"><button>تواصل معنا لحجز زياره</button></Link>
            </div>
         </div>
         {/* Buliding sime section */}
         <div className="buliding-sime">
            <h1>تفقد عقارات مشابهه</h1>
            <div className='card-flex'>
               <div className="house-card">
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663186.png" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663188.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663187.webp" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663189.webp" alt="home-img" className="home-img" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Homes;