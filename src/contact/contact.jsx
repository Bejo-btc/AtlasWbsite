import React from "react";
import "./contact.css";
import Header from "../component/header";
import Footer from "../component/footer/Footer";
function Contact() {
   return (
      <div className="">
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
           <li><i className="fas fa-phone"></i></li>
               <div>
                  <h4>مواقعما</h4>
                  <span> الخرطوم شارع الصحافه</span>
               </div>
            </div>
            <div className="card">
             <li><i className="fas fa-location-dot"></i></li>
               <div>
                  <h4>ارقام التواصل </h4>
                  <span>+249969929157</span>
               </div>
            </div>
            <div className="card">
    <li><i className="fas fa-envelope"></i></li>
               <div>
                  <h4>البريد الالكتروني</h4>
                  <span>example@example.com</span>
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
         <Footer />
      </div>
   );
}

export default Contact;