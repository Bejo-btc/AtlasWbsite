import { Link } from "react-router-dom"
import Header from "./header"
import "./header.css"
function Landing() {
  return (
    <div className="landing">
      <Header />
      <div className='landing-grid'>
        <div className='land-image' />
        <div className='landing-content'>
          <h1>شركة رائدة في مجال التكنولوجيا</h1>
          <p>نحن نقدم حلول تكنولوجية مبتكرة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم.</p>
          <Link to="/InfoPage">
            <button> ابدارحلتك العقاريه </button>
          </Link>
          <div className='cards'>
            <div className="card">
              <span><i className="fa-solid fa-user-tie"></i></span>
              <p>كلعميل عنده قصه مختلفه </p>
            </div>
            <div className="card">
               <span><i className="fa-solid fa-house-circle-check"></i></span>
              <p>كل عقار لازم يلقى الشخص المناسب </p>
            </div>
            <div className="card">
              <span><i className="fa-solid fa-handshake"></i></span>
              <p> الوضوح والصدق اساس في التعامل  </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Landing;