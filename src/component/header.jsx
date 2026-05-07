import { Link } from "react-router-dom"
import { useState } from "react"
import "./header.css"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <Link to="/contact" className="contact-btn">
          <button>تواصل معنا</button>
        </Link>
        
        <div className="header-content">
          <nav className={`nav ${isOpen ? 'open' : ''}`}>
            <ul>
              <Link to="/" onClick={closeMenu}>
                <li>الرئيسية</li>
              </Link>
              <Link to="/infoPage" onClick={closeMenu}>
                <li>العقارات</li>
              </Link>
              <Link to="/homes" onClick={closeMenu}>
                <li>الخدمات</li>
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                <li>التواصل</li>
              </Link>
            </ul>
          </nav>
          
          <div className="logo-container">
            <img src="/image-5.jpg" alt="logo" className="logo" />
          </div>
        </div>

      </header>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}

export default Header;
