import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Header from "./component/header";
import Footer from "./component/footer";




export default function Home() {
  return (

    <div>
      <Header></Header>
     <main>   
       <section className=" imagefond ">
          <h1>Bonjour je suis John Doe</h1>        
          <h2>Développeur web full stack</h2>
             <button type="button" className="btn btn-sm btn-danger" popoverTarget="mon-modal" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">En savoir plus</button>
      
      
      
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  En savoir plus
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Mon profil GitHub</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div>
        </div>
         <div> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
          John Doe

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
          </svg>


</div>
       

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       </section>  





       <section className="container ">
         <article className="row  my-3"> 
           <div className="col-md-12 col-lg-6"> 
             <h3 className="border-bottom border-3 border-bottom border-primary p-3">A propos</h3>
              <div className="column">
                <div className="col-auto">
                <img src="/img/john-doe-about.jpg" alt="john doe en train de coder" className="img-fluid pt-2"/>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet sollicitudin velit pharetra placerat. Aliquam faucibus, ex a semper vulputate, ligula risus lacinia metus, at ? </small>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet sollicitudin velit pharetra placerat. Aliquam faucibus, ex a semper vulputate, ligula risus lacinia metus, at ? </small>
                 <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet sollicitudin velit pharetra placerat. Aliquam faucibus, ex a semper vulputate, ligula risus lacinia metus, at ? </small>
                </div> 
              </div>
          </div>
                                               

             <div className="col-md-12 col-lg-6"> 
          <h3 className="border-bottom border-3 border-bottom border-primary p-3">Mes compétence</h3>
<span>HTML5 90%</span>
         <div className="progress mb-3">
  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>CSS3 80%</span>
<div className="progress mb-3">
  
  <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>JAVASCRIPT 70%</span>
<div className="progress mb-3">
  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>PHP 60%</span>
<div className="progress mb-3">
  <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span>REACT 50%</span>
<div className="progress mb-3">
  <div className="progress-bar bg-info-dark" role="progressbar" style={{ width: '50%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
           </div>
           
         </article>
      </section>

        
      </main>

      <Footer></Footer>

    </div>  

  );
}
