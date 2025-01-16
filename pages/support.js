import React, { useState } from 'react';
import styles from '../styles/Support.module.css';
import { FaMobileAlt, FaEnvelope, FaTimes } from 'react-icons/fa';

// Material UI imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

const Support = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
      setEmailError(false)
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
      setSubjectError(false)
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
      setDescriptionError(false)
  };


    const handleAttachmentChange = (event) => {
        const files = Array.from(event.target.files);
        setAttachments(files);
    };


  const handleSubmit = () => {
      let valid = true;
      if(!validateEmail(email)){
          setEmailError(true);
         valid = false;
      }
      if(!subject){
          setSubjectError(true);
          valid = false;
      }
      if(!description){
        setDescriptionError(true);
          valid = false;
      }
    if(valid){
        setIsLoading(true);
         setTimeout(() => {
            setShowThankYouModal(true);
            setIsLoading(false);
            setEmail('');
           setSubject('');
           setDescription('');
           setAttachments([]);
             setEmailError(false);
            setSubjectError(false);
            setDescriptionError(false);
        }, 2000);
    }

  };

   const handleCloseThankYouModal = () => {
    setShowThankYouModal(false);
  };
    const modalButtonStyles = {
        color: 'white',
        backgroundColor: 'var(--color-primary)',
        '&:hover': {
            backgroundColor: 'var(--color-secondary)'
        }
    }


  return (
    <div className={styles.support}>
        <section className={styles.introSection}>
             <h2>We Value Your Concerns</h2>
            <p>
                At PayShipGo, we care about your business and take your concerns seriously.
                 If you have any questions, concerns, or issues, feel free to reach out to us through any of the methods below.
                  We are committed to providing prompt and effective assistance.
              </p>
         </section>
      <div className={styles.contactInfo}>
        <div>
          <FaMobileAlt className={styles.contactIcon} />
          <span>Mobile: +63 915-915-8322</span>
        </div>
        <div>
          <FaEnvelope className={styles.contactIcon} />
          <span>Email: payshipgo.support@gmail.com</span>
        </div>
      </div>

      <section className={styles.requestSection}>
        <h2>Submit a Request</h2>
        <TextField
          label="Your email address"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
           error={emailError}
          helperText={emailError ? 'Invalid email format' : ''}
            required
        />
        <TextField
          label="Subject"
          variant="outlined"
          value={subject}
          onChange={handleSubjectChange}
          fullWidth
          margin="normal"
             error={subjectError}
            helperText={subjectError ? 'Subject is required' : ''}
            required
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          margin="normal"
           error={descriptionError}
          helperText={descriptionError ? 'Description is required' : ''}
          required
        />
        <div className={styles.attachmentContainer}>
              <label htmlFor="attachment-upload" className={styles.attachmentLabel}>
                  Attach Files
              </label>
             <input
                  id="attachment-upload"
                    type="file"
                   multiple
                    onChange={handleAttachmentChange}
                   className={styles.attachmentInput}
           />
                 {attachments.length > 0 && (
                     <ul className={styles.attachmentList}>
                       {attachments.map((file, index) => (
                             <li key={index}>{file.name}</li>
                         ))}
                    </ul>
                 )}
            </div>

        <div className={styles.buttonContainer}>
          <Button variant="contained" sx={modalButtonStyles} onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? <CircularProgress size={24} color="inherit"/> : 'Submit'}
          </Button>
        </div>
      </section>
      <Modal open={showThankYouModal} onClose={handleCloseThankYouModal} className={styles.modal}>
               <div className={styles.modalContent}>
                   <h2>Thank you for messaging your concerns, we will keep in touch with you soonest!</h2>
                   <div className={styles.modalButtonGroup}>
                         <Button onClick={handleCloseThankYouModal} className={styles.modalCloseButton} sx={{ color: 'var(--color-primary)' }}>
                               <FaTimes/>
                         </Button>
                  </div>
              </div>
           </Modal>
    </div>
  );
};

export default Support;