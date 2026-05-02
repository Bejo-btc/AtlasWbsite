import React from 'react';
import './phon-index.css';

function PhoneIndex() {
   return (
      <div className="info-container">
         <div className="info-img">
            <div className="info-header">
               <button type="submit">تواصل معنا </button>
               <div>
                  <nav>
                     <ul>
                        <li>الصفحه الرئيسيه</li>
                        <li>العقارات </li>
                        <li>العروض</li>
                        <li>عن أطلس </li>
                     </ul>
                  </nav>
               </div>
            </div>
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
                  <img src="/Frame 2085663194.png" alt="card" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span></span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663196.png" alt="card-img" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span></span>
                  </div>
                  <p>البيع: ١.٧ مليون جنية سوداني </p>
               </div>
            </div>
            <div className="info-card">
               <div className="card-info">
                  <img src="/Frame 2085663197.png" alt="card-img" />
                  <div className="location">
                     <h2>الخرطوم الحي الصحافة </h2>
                     <span></span>
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
                     <img src="/Frame 2085663188.png" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663187.png" alt="home-img" className="home-img" />
                  </div>
                  <div className='home-card'>
                     <div className="home-info">
                        <h6>خبره واسعه في السوق</h6>
                        <span>تفقد العقارات</span>
                     </div>
                     <img src="/Frame 2085663189.png" alt="home-img" className="home-img" />
                  </div>
               </div>
            </div>
            <div className='houses-btn'>
               <button>أبدء رحلتك العقارية</button>
            </div>
         </div>
         {/* community */}
         <div className="community">
            <div className="community-content">
               <h1>مجمع أطلس السكني</h1>
               <p>وحدات سكنيه مصممه للراحه اليوميه ، بمواقع مدروسه وتشطيب عملي يناسب العائلات  </p>
            </div>
         </div>
         {/* footer */}
         <footer>
            <div className="footer-container">
               <div className="footer-logo">
                  <img src="/image 5.jpg" alt="logo" />
               </div>
               <div className='footer-info'>
                  <div>
                     <p className="text">شركه متخصصه في التسويق والخدمات العقاريه . تمتلك خبره واسعه في سوق العقارات . نلتزم بتقديم حلول عقاريه موثوقه تلبي احتياجات عملائنا . هدنا هو تبسيط رحله البحث عن العقار وتحقيق أفضل قيمه لعملائنا</p>
                  </div>
                  <div>
                     <span className="foo-number">+249969929157</span>
                     <h6>العنوان الرئيسي</h6>
                     <p>الخرطوم , حي الصحافه<br />كل يوم من الساعه 8 صباحا حتى ال 4مساء  </p>
                  </div>
               </div>
               <div className='footer-grid'>
                  <ul style={{ padding: '10px' }}>
                     <li><a href="#">Feacbook</a></li>
                     <li><a href="#">Instgram</a></li>
                     <li><a href="#">Twitter</a></li>
                     <li><a href="#">Youtube</a></li>
                  </ul>
                  <span> جميع الحقوق محفوظه</span>
                  <button>تواصل معنا</button>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default PhoneIndex;
