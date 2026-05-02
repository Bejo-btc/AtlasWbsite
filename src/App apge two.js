import { useRef, seState } from 'react';
import './App.css';

function App() {

  return (
    <>
      <div className='container'>
        <div className="landing">
          <header>
            <button>تواصل معنا </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <nav>
                <ul>
                  <li><a href='#'>الرئيسية</a></li>
                  <li><a href='#'>عن الشركة</a></li>
                  <li><a href='#'>الخدمات</a></li>
                  <li><a href='#'>التواصل</a></li>
                </ul>
              </nav>
              {/* <div>
                <img src="\image 5.jpg" alt="logo" />
              </div> */}
            </div>
          </header>
          <div className='landing-grid'>
            <div className='land-image' />
            <div className='landing-content'>
              <h1>شركة رائدة في مجال التكنولوجيا</h1>
              <p>نحن نقدم حلول تكنولوجية مبتكرة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم.</p>
              <button >ابدا رحلتك العقارية</button>
              <div className='cards'>
                <div className="card">
                  <span >180+</span>
                  <p>يعد القطاع العقاري من أهم القطاعات الاقتصاديه </p>
                </div>
                <div className="card">
                  <span >180+</span>
                  <p>يعد القطاع العقاري من أهم القطاعات الاقتصاديه </p>
                </div>
                <div className="card">
                  <span >180+</span>
                  <p>يعد القطاع العقاري من أهم القطاعات الاقتصاديه </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default App;
