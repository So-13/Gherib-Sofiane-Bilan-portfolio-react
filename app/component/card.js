 
 export default function Card({ title, subtitle, description,icone }) {
    return (
     
 <div className="card">
  <div className="card-body">
    {icone}
    </div>
    <h5 className="card-title">{title}</h5>
   
    <p className="card-text">{description}</p>
  
  
</div>




    );  }