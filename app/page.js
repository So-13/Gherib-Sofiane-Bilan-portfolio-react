import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    
     <div>
    <main>
      <nav>
        <Link href="/">HOME</Link> 
        <Link href="/services">SERVICES</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/mentions-legales">MENTIONS LEGALES</Link>
      </nav>
      <button type="button" class="btn btn-primary">Primary</button>

    </main>
     </div>

  );
}
