export default function Formulaire() {
  return (
    <form action="#" method="post" className="w-100">
      <div className="form-group">
        <label className="visually-hidden" htmlFor="specificSizeInputName"></label>
        <input type="text" className="form-control" id="specificSizeInputName" placeholder="Votre nom" />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="  Votre adresse email" />
      </div>


      <div className="form-group">
        <label htmlFor="tel" className="form-label"></label>
        <input type="tel" className="form-control" id="tel" name="tel" placeholder="Votre numéro de téléphone" />
      </div>


      <div className="form-group">
        <label htmlFor="sujet" className="form-label"></label>
        <input type="text" className="form-control" id="sujet" placeholder="Sujet" />
      </div>

      <div className="form-group">
        <label htmlFor="message"></label>
        <textarea className="form-control" id="message" rows={12} placeholder=" Votre message"></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Envoyer</button>

    </form>
  )
}