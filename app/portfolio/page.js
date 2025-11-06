import React from 'react';
import Link from 'next/link';
import style from "./portfolio.css";
import Card from "../component/card2";


export default function portfolio() {
  return (
    <div className="h-50">
      <img src="/img//banner.jpg" className='img-fluid'></img>

      <main>
        <div className='container'>
          <div className='monoffre mb-4'>
            <h3 className='pt-5'>Portfolio</h3>
            <p> Voici quelques-une de mes réalisations.</p>
            <div className="border-bottom border-5 border-bottom border-primary "></div>
          </div>

          <div className='row'>
            <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
              <Card className="boxcard" imgg={<img className="card-img-top" src="/img/portfolio/fresh-food.jpg" alt="Panier de légumes posés sur une table"></img>}
                title={"Fresh Food"} description={"Site de vente de produits frais en ligne"} lienn={"Voir le site"} footerr={"Site réalisé avec PHP et MySQL"}></Card>
            </div>

            <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
              <Card className="boxcard" imgg={<img className="card-img-top" src="/img/portfolio/restaurant-japonais.jpg" alt="sushi sur une natte en bois"></img>}
                title={"Restaurant Akira"} description={"Site de vente de produits frais en ligne"} lienn={"Voir le site"} footerr={"Site réalisé avec WordPress"}></Card>
            </div>

            <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
              <Card className="boxcard" imgg={<img className="card-img-top" src="/img/portfolio/espace-bien-etre.jpg" alt="tête de la status de bouda avec une fleur de lotus et des galets empilés sous un couché de soleil"></img>}
                title={"Espace bien-être"} description={"Site de vente de produits frais en ligne"} lienn={"Voir le site"} footerr={"Site réalisé avec LARAVEL"}></Card>
            </div>

            <div className="mb-3 col-sm-12 col-md-4 col-lg-4 ">
              <Card className="boxcard" imgg={<img className="card-img-top" src="/img/portfolio/seo.jpg" alt="Amélioration du référencement d'un site ee-commerce" footerr={"Utilisation des outils SEO"}></img>}
                title={"SEO"} description={"Amélioration du référencement d'un site e-commerce"} lienn={"Voir le site"} footerr={"Utilisation des outils SEO"}></Card>
            </div>

            <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
              <Card className="boxcard" imgg={<img className="card-img-top" src="/img/portfoliO/coder.jpg" alt="ligne de code"></img>}
                title={"Création d'une API"} description={"Création d'une API RESTFULL publique"} lienn={"Voir le site"} footerr={"PHP -SYMFONY"}></Card>
            </div>

            <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
              <Card className="boxcard" imgg={<img className="card-img-top" src="/img/portfolio/screens.jpg" alt="un ordinateur portable ainsi qu'une tablette et un écran d'ordinateur"></img>}
                title={"Maquette d'un site site web"} description={"Création du prototype d'un site"} lienn={"Voir le site"} footerr={"Réalisé avec FIGMA"}></Card>
            </div>
          </div>
        </div>



      </main>

      <h1>portfolio</h1>
    </div>

  )
}

