// index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FaShieldAlt, FaUsers, FaRocket, FaCogs, FaCheckCircle, FaPaypal, FaTruck, FaLock, FaEye, FaMoneyBill } from 'react-icons/fa';

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="images/logo.png" />
                <title>PayShipGo - Integrated Payment and Shipping Solutions</title>
                <meta name="description" content="Streamline your business with PayShipGo's integrated payment and shipping solutions." />
            </Head>

            <main className={styles.main}>
                <section className={styles.banner}>
                    <div className={styles.container}>
                        <h1>Simplify Your Business Operations</h1>
                        <p>We take the complexity out of payment and shipping integration so you can focus on growing your business.</p>
                    </div>
                </section>

                <section className={styles.benefits}>
                    <div className={styles.container}>
                        <h2>Why Choose PayShipGo?</h2>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <FaRocket className={styles.icon} />
                                <h3>All-in-One Solution</h3>
                                <p>Manage payments and shipping in one platform.</p>
                            </div>

                            <div className={styles.card}>
                                <FaShieldAlt className={styles.icon} />
                                <h3>Security & Reliability</h3>
                                <p>Rest assured that transactions and deliveries are handled securely.</p>
                            </div>

                            <div className={styles.card}>
                                <FaUsers className={styles.icon} />
                                <h3>Customer Satisfaction</h3>
                                <p>Enhance your service with real-time updates and multiple payment/shipping options.</p>
                            </div>

                            <div className={styles.card}>
                                <FaCogs className={styles.icon} />
                                <h3>Scalability</h3>
                                <p>Expand your reach with solutions tailored for local and international customers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.features}>
                    <div className={styles.container}>
                        <h2>Features That Drive Growth</h2>

                        <div className={styles.featuresList}>
                             <div className={`${styles.featureCard} ${styles.featureCard1}`}>
                                 <div className={styles.featureCardIcon}><FaCheckCircle/></div>
                                 <div>
                                  <h3>Seamless Integration</h3>
                                  <p>Focus on your business while PayShipGo handles complex integrations.</p>
                                </div>
                            </div>

                            <div className={`${styles.featureCard} ${styles.featureCard2}`}>
                                <div className={styles.featureCardIcon}><FaPaypal/></div>
                                <div>
                                  <h3>Comprehensive Payment Options</h3>
                                  <p>Support for PesoPay, PayMaya, PayPal, and more.</p>
                                </div>
                            </div>

                            <div className={`${styles.featureCard} ${styles.featureCard3}`}>
                                <div className={styles.featureCardIcon}><FaTruck/></div>
                                <div>
                                  <h3>Reliable Shipping Solutions</h3>
                                  <p>Partner with top logistics providers like LBC and J&T.</p>
                                </div>
                            </div>

                            <div className={`${styles.featureCard} ${styles.featureCard4}`}>
                                 <div className={styles.featureCardIcon}><FaLock/></div>
                                 <div>
                                  <h3>Enhanced Security</h3>
                                  <p>Built-in fraud detection and compliance measures.</p>
                                </div>
                            </div>

                            <div className={`${styles.featureCard} ${styles.featureCard5}`}>
                                <div className={styles.featureCardIcon}><FaEye/></div>
                                <div>
                                  <h3>Real-Time Monitoring</h3>
                                  <p>Live updates on payment and shipment statuses.</p>
                                </div>
                            </div>

                            <div className={`${styles.featureCard} ${styles.featureCard6}`}>
                                <div className={styles.featureCardIcon}><FaMoneyBill/></div>
                                <div>
                                  <h3>Cost-Effective</h3>
                                  <p>Reduce operational costs by centralizing processes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}