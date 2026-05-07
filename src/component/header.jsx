import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header>
        {/* اللوجو */}
        <div className="logo-container">
          <img src="/image-5.jpg" alt="logo" className="logo" />
        </div>

        {/* النافيجيشن */}
        <nav className={isOpen ? "open" : ""}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>الرئيسية</Link></li>
            <li><Link to="/InfoPage" onClick={closeMenu}>العقارات</Link></li>
            <li><Link to="/homes" onClick={closeMenu}>الخدمات</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>التواصل</Link></li>
          </ul>
        </nav>

        {/* زر تواصل معنا */}
        <Link to="/contact" className="contact-btn">
          <button>تواصل معنا</button>
        </Link>

        {/* زر الهامبرغر */}
        <button
          className={`burger-menu ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* الأوفرلاي */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
