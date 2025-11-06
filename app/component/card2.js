
export default function Card2({ imgg, iconee, title, description, lienn, footerr }) {
  return (

    <div className="card">
      {imgg}
    
      
      <h5 className="card-title pt-3">{title}</h5>
      <p className="card-text text-center  ">{description}</p>
      <a href="#" className="btn btn-primary ">{lienn}</a>
      <div className="card-footer">{footerr}</div>

    </div>

  );
}