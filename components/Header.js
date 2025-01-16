import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/logo1.png" 
            alt="PayShipGo Logo" 
            width={120} 
            height={70} 
            priority
          />
        </Link>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/services">Services</Link>
          <Link href="/developers">Developers</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/support">Support</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;