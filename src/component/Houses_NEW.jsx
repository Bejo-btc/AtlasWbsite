import React, { useState } from 'react';
import './Houses.css';
const Houses_new = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      type: 'شقة',
      name: 'شقة فاخرة - حي الصحافة',
      location: 'حي الصحافة، الخرطوم',
      price: '١.٧ مليون جنيه',
      status: 'متاحة',
      statusClass: 'new',
      area: 180,
      rooms: 3,
      baths: 3,
      floor: 'الثاني',
      features: ['تكييف مركزي', 'مطبخ جاهز', 'بلكونة'],
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
    },
    {
      id: 2,
      type: 'فيلا',
      name: 'فيلا المنصورة الراقية',
      location: 'المنصورة، الخرطوم',
      price: '٤.٢ مليون جنيه',
      status: 'جديدة',
      statusClass: 'new',
      area: 320,
      rooms: 5,
      baths: 4,
      floor: 'أرضي',
      features: ['حديقة خاصة', 'مسبح', 'جراج', 'أمن ٢٤ ساعة'],
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80'
    },
    {
      id: 3,
      type: 'دوبلكس',
      name: 'دوبلكس الرياض الحديث',
      location: 'حي الرياض، أم درمان',
      price: '٢.٩ مليون جنيه',
      status: 'مباعة',
      statusClass: 'sold',
      area: 240,
      rooms: 4,
      baths: 3,
      floor: 'الأول والثاني',
      features: ['روف برايفت', 'تشطيب سوبر لوكس', 'مصعد'],
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80'
    },
    {
      id: 4,
      type: 'شقة',
      name: 'شقة كافوري - إطلالة نيلية',
      location: 'الكافوري، الخرطوم بحري',
      price: '١.٣ مليون جنيه',
      status: 'متاحة',
      statusClass: 'new',
      area: 140,
      rooms: 2,
      baths: 2,
      floor: 'الثالث',
      features: ['إطلالة نيلية', 'تشطيب راقي', 'موقف سيارة'],
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80'
    }
  ];

  const getFilteredProperties = () => {
    if (selectedType === 'all') return properties;
    return properties.filter(p => p.type === selectedType);
  };

  const handleFilter = (type) => {
    setSelectedType(type);
  };

  const handleCardClick = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const handleModalBgClick = (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  };

  const filteredProperties = getFilteredProperties();

  return (
    <>
      <section className="section">
        <div className="section-tag">
          <span></span>عقاراتنا
        </div>
        <h2 className="section-title">أحدث العقارات</h2>
        <p className="section-sub">
          اكتشف مجموعتنا المختارة من العقارات المميزة في أفضل المواقع بالخرطوم
        </p>

        <div className="filters">
          <button
            className={`f-btn ${selectedType === 'all' ? 'active' : ''}`}
            onClick={() => handleFilter('all')}
          >
            الكل
          </button>
          <button
            className={`f-btn ${selectedType === 'شقة' ? 'active' : ''}`}
            onClick={() => handleFilter('شقة')}
          >
            شقق
          </button>
          <button
            className={`f-btn ${selectedType === 'فيلا' ? 'active' : ''}`}
            onClick={() => handleFilter('فيلا')}
          >
            فيلات
          </button>
          <button
            className={`f-btn ${selectedType === 'دوبلكس' ? 'active' : ''}`}
            onClick={() => handleFilter('دوبلكس')}
          >
            دوبلكس
          </button>
        </div>

        <div className="grid">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(property)}
            >
              <div className="card-img">
                <img src={property.img} alt={property.name} loading="lazy" />
                <div className={`badge ${property.statusClass}`}>{property.status}</div>
                <div className="price-overlay">
                  <div className="pl">السعر</div>
                  <div className="pv">{property.price}</div>
                </div>
              </div>
              <div className="card-body">
                <div className="prop-name">{property.name}</div>
                <div className="prop-loc">📍 {property.location}</div>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-val">{property.area}م²</div>
                    <div className="stat-key">المساحة</div>
                  </div>
                  <div className="stat">
                    <div className="stat-val">{property.rooms}</div>
                    <div className="stat-key">غرف</div>
                  </div>
                  <div className="stat">
                    <div className="stat-val">{property.baths}</div>
                    <div className="stat-key">حمامات</div>
                  </div>
                  <div className="stat">
                    <div className="stat-val">{property.floor}</div>
                    <div className="stat-key">الطابق</div>
                  </div>
                </div>
                <div className="features">
                  {property.features.map((feature, idx) => (
                    <span key={idx} className="feat">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="card-footer">
                  <button className="btn-details">تفاصيل العقار</button>
                  <button
                    className="btn-fav"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🤍
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedProperty && (
        <div className="modal-bg open" id="modal" onClick={handleModalBgClick}>
          <div className="modal" id="modal-box">
            <div className="modal-img">
              <img src={selectedProperty.img} alt={selectedProperty.name} />
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
              <div className="modal-price">
                <div className="mpl">السعر</div>
                <div className="mpv">{selectedProperty.price}</div>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-name">{selectedProperty.name}</div>
              <div className="modal-loc">📍 {selectedProperty.location}</div>
              <div className="modal-stats">
                <div className="m-stat">
                  <div className="m-stat-val">{selectedProperty.area}م²</div>
                  <div className="m-stat-key">المساحة</div>
                </div>
                <div className="m-stat">
                  <div className="m-stat-val">{selectedProperty.rooms}</div>
                  <div className="m-stat-key">غرف النوم</div>
                </div>
                <div className="m-stat">
                  <div className="m-stat-val">{selectedProperty.baths}</div>
                  <div className="m-stat-key">الحمامات</div>
                </div>
                <div className="m-stat">
                  <div className="m-stat-val">{selectedProperty.type}</div>
                  <div className="m-stat-key">النوع</div>
                </div>
              </div>
              <div className="modal-feats">
                {selectedProperty.features.map((feature, idx) => (
                  <span key={idx} className="modal-feat">
                    ✓ {feature}
                  </span>
                ))}
              </div>
              <button className="btn-contact">📞 تواصل معنا الآن</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Houses_new;
