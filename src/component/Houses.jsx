
import { Link } from "react-router-dom"
function Houses() {
  return (

    <div className="houses">
      <div className='houses-header'>
        <p> أن تكون الخيار الاول غي المجال العقاري وأن تساهم تطوير مجتمعات عمرانيه مستدامه تعكس جوده الحياه </p>
        <h2>شركه اطلس للتطوير</h2>
      </div>
      <div className='card-flex'>
        <div className="house-card">
          <div className='home-card'>
            <div className="home-info">
              <h6>خبره واسعه في السوق</h6>
              <span>تفقد العقارات</span>
            </div>
            <img src="\Frame 2085663186.png" alt="home-img" className="home-img" />
          </div>
          <div className='home-card'>
            <div className="home-info">
              <h6>خبره واسعه في السوق</h6>
              <span>تفقد العقارات</span>
            </div>
            <img src="\Frame 2085663188.webp" alt="home-img" className="home-img" />
          </div>
          <div className='home-card'>
            <div className="home-info">
              <h6>خبره واسعه في السوق</h6>
              <span>تفقد العقارات</span>
            </div>
            <img src="\Frame 2085663187.webp" alt="home-img" className="home-img" />
          </div>
          <div className='home-card'>
            <div className="home-info">
              <h6>خبره واسعه في السوق</h6>
              <span>تفقد العقارات</span>
            </div>
            <img src="Frame 2085663189.webp" alt="home-img" className="home-img" />
          </div>
        </div>
      </div>
      <div className='houses-btn'>
           <Link to="/homes"> <button> ابدأ رحلتك العقاريه</button></Link>
      </div>
    </div>
  );
}

export default Houses;