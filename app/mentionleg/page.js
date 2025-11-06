import React from 'react';
import Link from 'next/link';
import style from "./mentionleg.css";
import Accordeon from '../component/accordeon';

export default function Services() {
  return (
    <div className='container h-100'>
      <head>
        <meta name="robots" content="noindex, nofollow"></meta>
      </head>
      <main>
        <div className='monoffre mb-4'>
          <h3 className='pt-5'>Mentions légales</h3>
          <div className="border-bottom border-5 border-bottom border-primary w-25 mb-3 p-1"></div>
        </div>
        <div className='container-accor'>
          <Accordeon></Accordeon>
        </div>
      </main>
    </div>

  );
}

