import React from 'react' ;
import Link from 'next/link';
import Header from "../component/header";
import Footer from "../component/footer"

function Mentionsleg() {
  return (
    <div>
      <Header></Header>
      <main>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/mentionleg">MENTIONS LEGALES</Link>
        </nav>
      </main>

      <h1>mention légales</h1>
      <Footer></Footer>
    </div>

  );
}

export default Mentionsleg