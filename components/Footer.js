import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactSection}>
          <div className={styles.address}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>EPS Building E. Gonzales St. Poblacion Uno, Silang, Philippines</span>
          </div>
          <div className={styles.phone}>
              <FaPhone className={styles.icon} />
            <span>+63 915-915-8322</span>
          </div>
           <div className={styles.email}>
             <FaEnvelope className={styles.icon} />
              <span>payshipgo@gmail.com</span>
           </div>
         </div>
         <div className={styles.copyright}>
           <p>© {new Date().getFullYear()} PayShipGo. All rights reserved.</p>
         </div>
       </div>
    </footer>
  );
};

export default Footer;