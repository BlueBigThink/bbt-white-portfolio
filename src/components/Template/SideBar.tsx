'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Brent C" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Brent C</h2>
          <p>
            <a href="mailto:brentbigthink@gmail.com">brentbigthink@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About ME</h2>
        <p>
          Hi, I&apos;m Brent. I am the co-founder of{' '}
          <a href="https://blogchain.us">Blogchain.us</a> Previously, I was an engineer of{' '}
          <a href="https://moonhub.ai">moonhub.ai</a>,{' '}
          <a href="https://definationlabs.io">Definationlabs.io</a>,{' '}and{' '}
          <a href="https://gigantonline.com">gigantonline.com</a>{' '}<br/>
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Brent C <Link href="/">brentbt.site</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
