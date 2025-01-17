import Image from 'next/image';
import styles from '../styles/Services.module.css';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Head from 'next/head';
export default function Services() {
  const paymentGateways = [
    {
      title: 'PesoPay',
      image: '/images/pesopay.png',
      services: [
        'Card Payments: Accept credit and debit card payments',
        'Alternative Payments: Direct debit, e-wallets, cash payments, PayPal',
        'Buy Now Pay Later (BNPL): Installment payment options'
      ],
      benefits: [
        'Expand customer base with multiple payment options',
        'Ensure secure transactions with robust security measures'
      ]
    },
    {
      title: 'Dragonpay',
      image: '/images/dragonpay.png',
      services: [
        'Online Banking: Accept payments through major Philippine banks',
        'Over-the-Counter Payments: Cash payments via partners',
        'E-Wallets: Support GCash, PayMaya, Coins.ph',
        'Installments: Options through Billease and Tendopay',
        'Cryptocurrency Payments: Bitcoin, Ethereum, Tether'
      ],
      benefits: [
        'Offer flexible payment methods',
        'Enhance accessibility with multiple payment options'
      ]
    },
    {
      title: 'PayPal',
      image: '/images/paypal.png',
      services: [
        'Global Payments: Accept payments worldwide',
        'Express Checkout: Quick and seamless checkout',
        'Buyer Protection: Secure transactions'
      ],
      benefits: [
        'Expand market reach internationally',
        'Increase conversion rates with trusted system'
      ]
    },
    {
      title: 'GCash',
      image: '/images/gcash.png',
      services: [
        'Mobile Wallet Payments: Pay through GCash app',
        'QR Code Payments: Quick payments via QR',
        'Bills Payment: Direct bill payments'
      ],
      benefits: [
        'Attract tech-savvy customers',
        'Simplify payment process'
      ]
    }
  ];

  const shippingServices = [
    {
      title: 'LBC Express',
      image: '/images/lbc.png',
      services: [
        'Parcel and Document Shipping',
        'QuikBox and QuikPac options',
        'Cash on Delivery (COD)'
      ],
      benefits: [
        'Extensive network for reliable deliveries',
        'Flexible payment and shipping options'
      ]
    },
    {
      title: 'J&T Express',
      image: '/images/j&t.png',
      services: [
        'Door-to-Door Delivery',
        'Real-Time Tracking',
        'Free Pick-Up Service'
      ],
      benefits: [
        'Timely deliveries with efficient logistics',
        'Enhanced customer experience with tracking'
      ]
    },
    {
      title: '2GO Express',
      image: '/images/2go.png',
      services: [
        'Parcel and Document Shipping',
        'Cash on Delivery (COD)',
        'International Shipping'
      ],
      benefits: [
        'Broad network for domestic and international',
        'Flexible delivery and payment options'
      ]
    },
    {
      title: 'Flash Express',
      image: '/images/flash.png',
      services: [
        'Same-Day Delivery',
        'Free Pick-Up Service',
        'Cash on Delivery (COD)'
      ],
      benefits: [
        'Speedy deliveries for customer satisfaction',
        'Comprehensive pick-up and delivery services'
      ]
    }
  ];

 
  const paymentApiServices = [
    {
      title: 'Payment Processing',
      description:
        'Facilitate the acceptance of payments through integrated gateways.',
    },
    {
      title: 'Payment Authorization',
      description:
        'Verify and authorize payment transactions before processing.',
    },
    {
      title: 'Refunds and Reversals',
      description: 'Manage the process of returning funds to customers when necessary.',
    },
    {
      title: 'Transaction History',
      description: 'Maintain a detailed record of all transactions for clients.',
    },
    {
      title: 'Recurring Payments',
      description: 'Support automated billing for subscription-based services.',
    },
    {
      title: 'Payment Status Check',
      description: 'Provide real-time updates on the status of payments.',
    },
    {
      title: 'Webhook Notifications',
      description: 'Set up webhooks to notify clients of payment events.',
    },
    {
      title: 'User Authentication',
      description: 'Ensure secure access to payment functionalities.',
    },
    {
      title: 'Currency Conversion',
      description: 'Handle transactions involving multiple currencies.',
    },
    {
      title: 'Fraud Detection and Security',
      description: 'Implement measures to detect and prevent fraudulent activities.',
    },
    {
      title: 'Wallet Management',
      description: 'Manage digital wallets for storing user funds.',
    },
    {
      title: 'Invoice Generation',
      description: 'Create and send invoices for completed transactions.',
    },
    {
      title: 'Multi-Currency Support',
      description: 'Enable transactions in various currencies.',
    },
    {
      title: 'Dispute and Chargeback Management',
      description: 'Handle disputes and chargebacks efficiently.',
    },
    {
      title: 'API for Merchant Integration',
      description:
        'Provide APIs for merchants to integrate PayShipGo\'s payment services into their platforms.',
    },
  ];

  const shippingApiServices = [
    {
      title: 'Shipping Rate Calculator',
      description:
        'Calculate shipping costs based on weight, dimensions, and destination.',
    },
    {
      title: 'Real-Time Shipment Tracking',
      description:
        'Enable customers to track their shipments from pick-up to delivery.',
    },
    {
      title: 'Shipment Creation',
      description: 'Create and manage shipping orders programmatically.',
    },
    {
      title: 'Label Generation',
      description: 'Generate printable shipping labels.',
    },
    {
      title: 'Pick-Up Scheduling',
      description:
        'Arrange for package pick-up at the customer\'s location.',
    },
    {
      title: 'Delivery Notifications',
      description:
        'Send updates about shipment status via SMS, email, or push notifications.',
    },
    {
      title: 'Address Validation',
      description: 'Validate delivery addresses to reduce failed deliveries.',
    },
    {
      title: 'Service Availability Check',
      description:
        'Check the availability of shipping services in specific regions.',
    },
    {
      title: 'Customs and Tax Information',
      description:
        'Provide details about customs clearance and applicable taxes for international shipments.',
    },
    {
      title: 'Shipment Cancellation or Modification',
      description: 'Allow customers to cancel or modify shipments before dispatch.',
    },
    {
      title: 'Proof of Delivery',
      description: 'Provide digital confirmation of successful deliveries.',
    },
    {
      title: 'Integration with E-commerce Platforms',
      description:
        'Seamlessly connect with platforms like Shopify, WooCommerce, and Magento.',
    },
  ];

  const integrationSteps = [
    {
      title: 'Merchant Onboarding',
      steps: [
        'Merchant registers with PayShipGo',
        'API credentials are generated'
      ]
    },
    {
      title: 'Payment Gateway Integration',
      steps: [
        'Merchant chooses payment gateways',
        'Integration of multiple payment gateway APIs'
      ]
    },
    {
      title: 'Shipping Service Integration',
      steps: [
        'Merchant selects shipping partners',
        'Connection to shipping service APIs'
      ]
    },
    {
      title: 'Transaction Flow',
      steps: [
        'End-user initiates purchase',
        'Payment processing',
        'Shipping details capture',
        'Tracking information provision'
      ]
    },
    {
      title: 'Post-Transaction Services',
      steps: [
        'Refunds and disputes management',
        'Transaction history updates'
      ]
    },
    {
      title: 'Monitoring and Maintenance',
      steps: [
        'Regular API updates',
        'Security checks and maintenance'
      ]
    }
  ];

  return (
    <>
     <Head>
          <link rel="icon" href="images/logo.png" />
          <title>Services - PayShipGo</title>
          <meta name="description" content="Streamline your business with PayShipGo's integrated payment and shipping solutions." />
      </Head>
    <div className={styles.services}>
      <section className={styles.section}>
        <h2>Payment Gateway Integration</h2>
        <div className={styles.gatewayGrid}>
          {paymentGateways.map((gateway) => (
            <div key={gateway.title} className={styles.gatewayCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={gateway.image}
                  alt={gateway.title}
                  width={200}
                  height={200}
                  className={styles.gatewayImage}
                />
              </div>
              <h3>{gateway.title}</h3>
              <div className={styles.gatewayContent}>
                <h4>Services We Integrate:</h4>
                <ul>
                  {gateway.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <h4>Your Benefits:</h4>
                <ul>
                  {gateway.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Payment API Services</h2>
        <div className={styles.apiGrid}>
          {paymentApiServices.map((service, index) => (
            <div key={index} className={styles.apiCard}>
                <div key={index} className={styles.apiTitle}>
                    <FaCheckCircle className={styles.apiIcon} />
                    <p>{service.title}</p>
                </div>
                <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Shipping Service Integration</h2>
        <div className={styles.gatewayGrid}>
          {shippingServices.map((service) => (
            <div key={service.title} className={styles.gatewayCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className={styles.gatewayImage}
                />
              </div>
              <h3>{service.title}</h3>
              <div className={styles.gatewayContent}>
                <h4>Services We Integrate:</h4>
                <ul>
                  {service.services.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h4>Your Benefits:</h4>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Shipping API Services</h2>
        <div className={styles.apiGrid}>
          {shippingApiServices.map((service, index) => (
            <div key={index} className={styles.apiCard}>
                <div key={index} className={styles.apiTitle}>
                    <FaCheckCircle className={styles.apiIcon} />
                    <p>{service.title}</p>
                </div>
                <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Integration Process</h2>
        <div className={styles.timeline}>
          {integrationSteps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <ul>
                  {step.steps.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {index < integrationSteps.length - 1 && (
                <FaArrowRight className={styles.timelineArrow} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  </>);
}