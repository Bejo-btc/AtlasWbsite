import React from "react";
import "./contact.css";
import Header from "../component/header";
function Contact() {
   return (
      <div className="container">
         <div className="contact">
            <Header />
            <div className="contact-land-img">
               <img src="/Group 15.png" alt="contact-img" />
            </div>
            <div className="contact-land-info">
               <div>
                  <h1>تواصل معنا بكل سهولة</h1>
                  <p>خلّنا نفهم احتياجك ونساعدك تختار القرار الصح بثقة ووضوح</p>
               </div>
            </div>
         </div>
         <div className="contact-info">
            <div className="card">
               <i>icon</i>
               <div>
                  <h4>مواقعما</h4>
                  <span> الخرطوم شارع الصحافه</span>
               </div>
            </div>
            <div className="card">
               <i>icon</i>
               <div>
                  <h4>مواقعما</h4>
                  <span> الخرطوم شارع الصحافه</span>
               </div>
            </div>
            <div className="card">
               <i>icon</i>
               <div>
                  <h4>مواقعما</h4>
                  <span> الخرطوم شارع الصحافه</span>
               </div>
            </div>
         </div>
         {/* <!--  --> */}
         <div className="info-cont">
            <h1>سجل اهتماماتك </h1>
            <form action="">
               <div className="info-input">
                  <input type="text" placeholder="اسم الاب " />
                  <input type="text" placeholder="اسمك" />
               </div>
               <div className="info-input">
                  <input type="number" placeholder="رقم الهاتف " />
                  <input type="email" placeholder="البريد الالكتورني " />
               </div>
               <div style={{ display: "grid", justifyContent: "flex-end", paddingRight: "15px" }}>
                  <input type="radio" name="radio" id="radio" />
               </div>
            </form>
            <div style={{ textAlign: "right" }}>
               <button type="submit">إرسال البيانات</button>
            </div>
         </div>
         {/* <!--  --> */}
         <div className="links">
            <div>
               <img src="/Sudan.png" alt="Sudan.png" className="Sudan-img" />
            </div>
            <div>
               <h1>خلينا نفهم احتياجاتك ونساعدك تختار القرار الصح بثقه ووضوح </h1>
               <span>تواصل مهنا</span>
               <ul>
                  <li><a href="#"><i className="fas-fa fas-faecbook">1</i></a></li>
                  <li><a href="#"><i className="fas-fa fas-faecbook">2</i></a></li>
                  <li><a href="#"><i className="fas-fa fas-faecbook">3</i></a></li>
                  <li><a href="#"><i className="fas-fa fas-faecbook">4</i></a></li>
               </ul>
            </div>
         </div>
         {/*  */}
         <footer>
            <div className="footer-container">
               <div className="footer-logo">
                  <img src="/image-5.jpg" alt="logo" className="logo" />
               </div>
               <img src="/Group 15.png" alt="Group 15" className="Group" />
               <div className='footer-info'>
                  <div>
                     <p className="text">شركه متخصصه في التسويق والخدمات العقاريه . تمتلك خبره واسعه في سوق العقارات . نلتزم
                        بتقديم حلول عقاريه موثوقه تلبي احتياجات عملائنا . هدنا هو تبسيط رحله البحث عن العقار وتحقيق أفضل
                        قيمه لعملائنا</p>
                  </div>
                  <div>
                     <span className="foo-number">+249969929157</span>
                     <h6>العنوان الرئيسي</h6>
                     <p>الخرطوم , حي الصحافه
                        <br />
                        كل يوم من الساعه 8 صباحا حتى ال 4مساء
                     </p>
                  </div>
               </div>
               <div className='footer-grid'>
                  <ul style={{ padding: "10px" }}>
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

export default Contact;