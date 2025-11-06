export default function Formulaire() {
  return (
      <form action="#" method="post">
        <div className="col-sm-12 col-lg-6 ">
       
           
              <label className="visually-hidden" htmlFor="specificSizeInputName"></label>
              <input type="text" className="form-control" id="specificSizeInputName" placeholder="Votre nom"/>
       

            
              <label htmlFor="exampleInputEmail1" className="form-label"></label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="  Votre adresse email" />
         

          
              <label htmlFor="tel" className="form-label"></label>
              <input type="tel" className="form-control" id="tel" name="tel" placeholder="Votre numéro de téléphone"/>
          

           
              <label htmlFor="sujet" className="form-label"></label>
              <input type="text" className="form-control" id="sujet" placeholder="Sujet" />
         

           
              <label htmlFor="message" className="form-label"></label>
                <textarea id="message" name="message"rows={12} cols={45} placeholder=" Votre message">
                
                </textarea>

          <button type="submit" className="btn btn-primary">Envoyer</button>
          
        </div>
      </form>
  )
}