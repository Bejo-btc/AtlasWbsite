import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homes.css';
import Header from '../component/header';

function Homes() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [autoPlay, setAutoPlay] = useState(true);

   const images = [
      '/Frame 2085663200.png',
      '/Frame 2085663201.webP',
      '/Frame 2085663202.webP',
      '/Frame 2085663203.webP'
   ];

   // Auto-play slider with 3 second delay
   useEffect(() => {
      if (!autoPlay) return;
      
      const interval = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000); // 3 second delay

      return () => clearInterval(interval);
   }, [autoPlay, images.length]);

   const goToSlide = (index) => {
      setCurrentSlide(index);
      setAutoPlay(false);
      // Resume auto-play after 5 seconds of user interaction
      setTimeout(() => setAutoPlay(true), 5000);
   };

   const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 5000);
   };

   const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 5000);
   };

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
            <div style={{padding: '20px' }}>
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
                        <h3>مزقت الايجار</h3>
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

         {/* Image Slider Section for تشطيبات */}
         <div className="buliding">
            <h1>صور التشطيبات</h1>
            
            <div className="slider-container">
               <div className="slider-wrapper">
                  <div className="slider-track" style={{
                     transform: `translateX(-${currentSlide * 100}%)`,
                     transition: 'transform 0.5s ease-in-out'
                  }}>
                     {images.map((image, index) => (
                        <div key={index} className="slider-slide">
                           <img src={image} alt={`buliding-img-${index}`} />
                        </div>
                     ))}
                  </div>
               </div>

               {/* Navigation Buttons */}
               <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
                  ❮
               </button>
               <button className="slider-btn slider-btn-next" onClick={nextSlide}>
                  ❯
               </button>

               {/* Dots Indicator */}
               <div className="slider-dots">
                  {images.map((_, index) => (
                     <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                     />
                  ))}
               </div>
            </div>

            <div className="buliding-btn">
               <Link to="/contact"><button>تواصل معنا لحجز زياره</button></Link>
            </div>
         </div>

         {/* Similar Properties Section */}
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
