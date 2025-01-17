import React, { useState, useContext } from 'react';
import styles from '../styles/Pricing.module.css';
import { FaCheck, FaRocket, FaBriefcase, FaBuilding, FaEnvelope, FaTimes } from 'react-icons/fa';
import Head from 'next/head';
// Material UI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// import { ThemeContext } from './ThemeContext';

const tiers = [
  {
    name: 'Pro',
    icon: <FaRocket />,
    orderLimit: 25,
    price: "Custom",
    features: {
      payment: [
        'Payment Processing',
        'Payment Authorization',
        'Transaction History',
         'Payment Status Check',
         'Webhook Notifications'
      ],
      shipping: [
        'Shipping Rate Calculator',
         'Real-Time Shipment Tracking',
          'Shipment Creation',
           'Label Generation'
      ]
    }
  },
  {
    name: 'Business',
    icon: <FaBriefcase />,
    orderLimit: 100,
    price: "Custom",
     features: {
      payment: [
        'Payment Processing',
        'Payment Authorization',
        'Refunds and Reversals',
        'Transaction History',
          'Recurring Payments',
         'Payment Status Check',
         'Webhook Notifications',
           'User Authentication',
         'Currency Conversion'
      ],
      shipping: [
        'Shipping Rate Calculator',
         'Real-Time Shipment Tracking',
          'Shipment Creation',
           'Label Generation',
           'Pick-Up Scheduling',
        'Delivery Notifications',
        'Address Validation'
      ]
    }
  },
  {
    name: 'Enterprise',
    icon: <FaBuilding />,
    orderLimit: '500+',
    price: 'Custom',
    features: {
      payment: [
        'Payment Processing',
        'Payment Authorization',
        'Refunds and Reversals',
        'Transaction History',
        'Recurring Payments',
        'Payment Status Check',
        'Webhook Notifications',
        'User Authentication',
        'Currency Conversion',
        'Fraud Detection and Security',
         'Wallet Management',
        'Invoice Generation',
          'Multi-Currency Support',
        'Dispute and Chargeback Management',
        'API for Merchant Integration'
      ],
      shipping: [
        'Shipping Rate Calculator',
         'Real-Time Shipment Tracking',
          'Shipment Creation',
           'Label Generation',
           'Pick-Up Scheduling',
        'Delivery Notifications',
        'Address Validation',
        'Service Availability Check',
        'Customs and Tax Information',
        'Shipment Cancellation or Modification',
         'Proof of Delivery',
         'Integration with E-commerce Platforms'
      ]
    }
  }
];


const Pricing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYouModal, setShowThankYouModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

    // const { theme } = useContext(ThemeContext); //use the theme, if you have one

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
      setEmailError(false);
  };

    const handleSubmit = () => {
        if(validateEmail(email)){
            setIsLoading(true);
              setEmailError(false)
            setTimeout(() => {
                setShowThankYouModal(true);
                setIsLoading(false);
                setEmail('');

            }, 2000)

        } else {
           setEmailError(true)
        }
    };

  const handleCloseThankYouModal = () => {
    setShowThankYouModal(false);
      setOpenModal(false);
  };

    const modalButtonStyles = { //Apply styles for the theme to the buttons
        color: 'white',
        backgroundColor: 'var(--color-primary)',
      '&:hover': {
            backgroundColor: 'var(--color-secondary)'
        }
    }

  return (
      <>
        <Head>
          <link rel="icon" href="images/logo.png" />
          <title>Pricing - PayShipGo</title>
          <meta name="description" content="Streamline your business with PayShipGo's integrated payment and shipping solutions." />
        </Head>
      <div className={styles.pricing}>
      <section className={styles.introSection}>
          <h2>Find the Perfect Plan for Your Business</h2>
          <p>
              Choose a plan that fits your business needs and budget. From small startups to large enterprises, we have a solution to help you succeed.
              Each plan is designed to provide the essential tools and services to streamline your payment and shipping process. Get started today!
          </p>
        </section>
        <div className={styles.tiersContainer}>
          {tiers.map((tier, index) => (
           <Card key={index} className={styles.tierCard}>
              <CardContent>
                <div className={styles.tierHeader}>
                  <span className={styles.tierIcon}>{tier.icon}</span>
                  <h2>{tier.name}</h2>
                </div>
                <p>Upto {tier.orderLimit} orders</p>
                <p className={styles.price}>
                    {tier.price === 'Custom' ? 'Custom Pricing' : `₱${tier.price}/month`}
                </p>
              <div className={styles.featureTable}>
                 <h3>Payment Services</h3>
                <ul>
                  {tier.features.payment.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} />
                       {feature}
                    </li>
                  ))}
                </ul>
                 <h3>Shipping Services</h3>
                  <ul>
                  {tier.features.shipping.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className={styles.checkIcon} />
                       {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          ))}
      </div>

        <div className={styles.getQuoteButtonContainer}>
          <Button variant="contained" onClick={handleOpenModal} className={styles.getQuoteButton}>
             GET QUOTE
           </Button>
        </div>


        <Modal open={openModal} onClose={handleCloseModal} className={styles.modal}>
        <div className={styles.modalContent}>
            <h2>Get competitive pricing for your business needs</h2>
           <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? 'Invalid email format' : ''}
             fullWidth
              margin="normal"
           />
        <div className={styles.modalButtonGroup}>
                <Button variant="contained" onClick={handleSubmit} sx={modalButtonStyles} disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Submit'}
                </Button>
               <Button onClick={handleCloseModal} className={styles.modalCloseButton} sx={{ color: 'var(--color-primary)' }}>
                  <FaTimes/>
             </Button>
          </div>
      </div>
       </Modal>

           <Modal open={showThankYouModal} onClose={handleCloseThankYouModal} className={styles.modal}>
               <div className={styles.modalContent}>
                   <h2>Thank you for reaching out, we will get back to you soonest!</h2>
                   <div className={styles.modalButtonGroup}>
                        <Button  onClick={handleCloseThankYouModal} className={styles.modalCloseButton} sx={{ color: 'var(--color-primary)' }}>
                               <FaTimes/>
                         </Button>
                  </div>
              </div>
           </Modal>
    </div>
  </>);
};

export default Pricing;