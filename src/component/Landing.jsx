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

  );
}

export default Landing;