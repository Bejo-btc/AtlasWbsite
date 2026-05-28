import { Link } from "react-router-dom"
function Houses() {
  return (

    <div className="houses">
      <div className='houses-header'>
        <p> أن تكون الخيار الاول غي المجال العقاري وأن تساهم تطوير مجتمعات عمرانيه مستدامه تعكس جوده الحياه </p>
        <h2>أحدث العقارات</h2>
      </div>
      <div className='houses-btn'>
           <Link to="/homes"> <button> ابدأ رحلتك العقاريه</button></Link>
      </div>
    </div>
  );
}

export default Houses;