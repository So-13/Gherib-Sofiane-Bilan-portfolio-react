import React from 'react' 
import Link from 'next/link';
import Header from "../component/header";
import Footer from "../component/footer"


export default function portfolio () {
  return (
     <div>

      <Header></Header>
           <main>
             <nav>
              <Link href="/">HOME</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/portfolio">PORTFOLIO</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/mentions-legales">MENTIONS LEGALES</Link>
             </nav>
           </main>
         
          <h1>portfolio</h1>
          <Footer></Footer>
         </div>
    
  )
}

