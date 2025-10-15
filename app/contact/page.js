import React from 'react';
import Link from 'next/link';
import Header from "../component/header";
import Footer from "../component/footer"

const contact = () => {
  return (
      
     <div>
      <Header></Header>

       <main>
         <nav>
          <Link href="/home">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/mentionleg">MENTIONS LEGALES</Link>
         </nav>
       </main>
     
      <h1>contact</h1>
      <Footer></Footer>
     </div>
    
  )
}

export default contact