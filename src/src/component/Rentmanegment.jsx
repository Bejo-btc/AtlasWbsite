import { Link } from "react-router-dom"
function Rentmanegment() {
  return (

    <div className="rent-manegment">
      <div className="manegment-header">
        <h1>أداره الاملاك... راحه بدون تعب</h1>
            <Link to="/contact"> <button>تواصل معنا </button></Link>
      </div>
      <div className='grid-container'>
        <div className="manegment-card" id="big-card">
          <div >
            <span> خبره واسعه في السوق</span>
            <p>تنظيم عقود الايجار , المتابعه مع المستاجرين وضمان الالتزام بالضوابط والاتفاقات</p>
          </div>
        </div>
        <div className="manegment-card" id='maneg'>
          <div>
            <span>متابعه العقار</span>
            <p>متابعه دوريه لحاله العقار, كشف الملاحظات وضمان استمراريه العقار بدون مشاكل مفاجئه
            </p>
          </div>
        </div>
        <div className="manegment-card" id="renters">أداره المستاجرين</div>
        <div className="manegment-card" id='fix'>الصيانه الدوريه</div>

      </div>
    </div>

  );
}

export default Rentmanegment;