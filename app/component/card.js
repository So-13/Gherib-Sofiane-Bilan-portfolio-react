
export default function Card({ imgg, iconee, title, description, lienn, footerr }) {
  return (

    <div className="card">
      {imgg}
      <div className="card-body">
        {iconee}
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text ">{description}</p>
    </div>
  );
}