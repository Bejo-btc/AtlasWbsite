import { Link } from "react-router-dom"
import "./header.css"

function Header() {
  return (
    <header>
     <Link to="/contact"> <button>تواصل معنا </button></Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <nav>
          <ul>
            <Link to="/"><li>الرئيسية</li></Link>
            <Link to="/infoPage"><li>العقارات</li></Link>
            <Link to="/homes"><li>الخدمات</li></Link>
            <Link to="/contact"><li>التواصل</li></Link>
          </ul>
        </nav>
        <div>
          <img src="/image-5.jpg" alt="logo" className="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;