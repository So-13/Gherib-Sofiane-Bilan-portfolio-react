import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';




export default function Home() {
  return (

    <div>
      <main>
        <section className=" imagefond w-100 ">
          <h1>Bonjour je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          
          <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            En savoir plus
          </button>
  
         
         
        </section>





        <section className="container pb-1">
          <article className="row  my-3 pb-4">
            <div className="col-md-12 col-lg-6">
              <h3 className="border-bottom border-3 border-bottom border-primary p-3">A propos</h3>
              <div className="column">
                <div className="col-auto">
                  <img src="/img/john-doe-about.jpg" alt="john doe en train de coder" className="img-fluid pt-2" />
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet sollicitudin velit pharetra placerat. Aliquam faucibus, ex a semper vulputate, ligula risus lacinia metus, at ? </small>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet sollicitudin velit pharetra placerat. Aliquam faucibus, ex a semper vulputate, ligula risus lacinia metus, at ? </small>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet sollicitudin velit pharetra placerat. Aliquam faucibus, ex a semper vulputate, ligula risus lacinia metus, at ? </small>
                </div>
              </div>
            </div>


            <div className="col-md-12 col-lg-6 h-25">
              <h3 className="border-bottom border-3 border-bottom border-primary p-3">Mes compétence</h3>
              <span>HTML5 90%</span>
              <div className="progress mb-2">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span>CSS3 80%</span>
              <div className="progress mb-2">

                <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span>JAVASCRIPT 70%</span>
              <div className="progress mb-2">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span>PHP 60%</span>
              <div className="progress mb-2">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span>REACT 50%</span>
              <div className="progress mb-2">
                <div className="progress-bar bg-info-dark" role="progressbar" style={{ width: '50%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </article>
        </section>


      </main>

    </div>

  );
}
