import { useState, useEffect } from "react";
import "./AccordionSlider.css";

const properties = [
  {
    id: "01",
    title: "شقة سكنية فاخرة",
    location: "حي الصحافة – الخرطوم",
    type: "للإيجار",
    image: "/Frame 2085663186.png",
    details: [
      { label: "المساحة", value: "180 م²" },
      { label: "الغرف", value: "٣ غرف" },
      { label: "الحمامات", value: "٣ حمامات" },
      { label: "الطابق", value: "الثاني" },
    ],
    badges: ["تكييف مركزي", "مطبخ جاهز", "بلكونة"],
    price: "١.٧ مليون",
  },
  {
    id: "02",
    title: "فيلا عائلية",
    location: "حي المنصور – الخرطوم",
    type: "للبيع",
    image: "/Frame 2085663187.webp",
    details: [
      { label: "المساحة", value: "350 م²" },
      { label: "الغرف", value: "٥ غرف" },
      { label: "الحمامات", value: "٤ حمامات" },
      { label: "الطابق", value: "أرضي + علوي" },
    ],
    badges: ["حديقة", "موقف سيارات", "أمن ٢٤ ساعة"],
    price: "٤.٢ مليون",
  },
  {
    id: "03",
    title: "شقة استثمارية",
    location: "وسط المدينة – الخرطوم",
    type: "للإيجار",
    image: "/Frame 2085663188.webp",
    details: [
      { label: "المساحة", value: "120 م²" },
      { label: "الغرف", value: "٢ غرف" },
      { label: "الحمامات", value: "٢ حمامات" },
      { label: "الطابق", value: "الخامس" },
    ],
    badges: ["إطلالة مميزة", "مصعد", "إنارة حديثة"],
    price: "٩٠٠ ألف",
  },
  {
    id: "04",
    title: "أرض سكنية",
    location: "حي الرياض – الخرطوم",
    type: "للبيع",
    image: "/Frame 2085663189.webp",
    details: [
      { label: "المساحة", value: "500 م²" },
      { label: "الواجهة", value: "٢٠ متر" },
      { label: "التصنيف", value: "سكني" },
      { label: "الموقع", value: "شارع رئيسي" },
    ],
    badges: ["خدمات كاملة", "موقع مميز", "سند ملكية"],
    price: "٢.٨ مليون",
  },
];

export default function AccordionSlider() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSlideClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const nextSlide = () => {
    const next = activeIndex === -1 ? 0 : (activeIndex + 1) % properties.length;
    setActiveIndex(next);
  };

  const prevSlide = () => {
    const prev =
      activeIndex === -1
        ? properties.length - 1
        : (activeIndex - 1 + properties.length) % properties.length;
    setActiveIndex(prev);
  };

useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") nextSlide();
      if (e.key === "ArrowRight") prevSlide();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeIndex, nextSlide, prevSlide]); 

  return (
    <div className="acc-slider-container">
      <div className="acc-now-showing">عقاراتنا المميزة</div>

      <div className="acc-accordion-slider">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`acc-slide ${activeIndex === index ? "acc-active" : ""}`}
            style={{ backgroundImage: `url('${property.image}')` }}
            onClick={() => handleSlideClick(index)}
          >
            <div className="acc-slide-content">
              <div className="acc-slide-number">{property.id}</div>
              <div className="acc-property-type">{property.type}</div>
              <div className="acc-property-title">{property.title}</div>
              <div className="acc-property-location">{property.location}</div>

              <div className="acc-details">
                {property.details.map((d, i) => (
                  <div key={i} className="acc-detail-row">
                    <span className="acc-detail-label">{d.label}:</span>
                    <span className="acc-detail-value">{d.value}</span>
                  </div>
                ))}
              </div>

              <div className="acc-badges">
                {property.badges.map((badge, i) => (
                  <div key={i} className="acc-badge">
                    <div className="acc-badge-dot" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              <div className="acc-price">
                <span className="acc-price-label">السعر:</span>
                <span className="acc-price-value">{property.price}</span>
              </div>
            </div>
            <div className="acc-add-button" />
          </div>
        ))}
      </div>

      <button className="acc-nav acc-nav-prev" onClick={prevSlide}>‹</button>
      <button className="acc-nav acc-nav-next" onClick={nextSlide}>›</button>
    </div>
  );
}
