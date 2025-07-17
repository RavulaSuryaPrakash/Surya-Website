import React, { useRef, useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  // Check if we're in dark mode
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Auto-hide popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setSubmitStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Reset errors
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    // Validate fields
    let hasErrors = false;
    
    if (!name.trim()) {
      setNameError(true);
      hasErrors = true;
    }
    
    if (!email.trim()) {
      setEmailError(true);
      hasErrors = true;
    } else if (!isValidEmail(email.trim())) {
      setEmailError(true);
      hasErrors = true;
    }
    
    if (!message.trim()) {
      setMessageError(true);
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Surya Ravula'
    };

    emailjs.send(
      'service_cb0jrtx',
      'template_b8oa79m',
      templateParams,
      'tzEtARN42EUg826_q'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('Message sent successfully!');
        setShowPopup(true);
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
        // Clear errors
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      },
      (error) => {
        console.log('FAILED...', error);
        setSubmitStatus('Failed to send message. Please try again.');
        setIsSubmitting(false);
      },
    );
  };

  const getTextFieldStyles = () => ({
    '& .MuiInputBase-input': {
      color: isDarkMode ? '#ffffff' : '#2c3e50',
    },
    '& .MuiInputLabel-root': {
      color: isDarkMode ? '#ffffff' : '#2c3e50',
    },
    '& .MuiFormHelperText-root': {
      color: isDarkMode ? '#ff6b6b' : '#d32f2f',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: isDarkMode ? '#ffffff' : '#2c3e50',
      },
      '&:hover fieldset': {
        borderColor: '#5000ca',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5000ca',
      },
      '&.Mui-error fieldset': {
        borderColor: isDarkMode ? '#ff6b6b' : '#d32f2f',
      },
    },
  });

  const getEmailHelperText = () => {
    if (emailError) {
      if (!email.trim()) {
        return "Please enter your email address";
      } else {
        return "Please enter a valid email address";
      }
    }
    return "";
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Interested in working together? Have a job opportunity or project in mind? Let's connect and explore possibilities!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-field"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError && e.target.value.trim()) {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={getTextFieldStyles()}
                fullWidth
              />
              <TextField
                required
                id="email-field"
                label="Email Address"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError && e.target.value.trim() && isValidEmail(e.target.value.trim())) {
                    setEmailError(false);
                  }
                }}
                error={emailError}
                helperText={getEmailHelperText()}
                sx={getTextFieldStyles()}
                fullWidth
              />
            </div>
            <TextField
              required
              id="message-field"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError && e.target.value.trim()) {
                  setMessageError(false);
                }
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={getTextFieldStyles()}
              fullWidth
            />
            <Button 
              variant="contained" 
              endIcon={<SendIcon />} 
              onClick={sendEmail}
              disabled={isSubmitting}
              sx={{
                backgroundColor: '#5000ca',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3a0080',
                },
                '&:disabled': {
                  backgroundColor: '#cccccc',
                  color: '#666666',
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {submitStatus && !submitStatus.includes('successfully') && (
              <p style={{ 
                marginTop: '15px', 
                color: '#f44336',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                {submitStatus}
              </p>
            )}
          </Box>
        </div>
      </div>
      
      {/* Success Popup */}
      {showPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <div className="popup-icon">✓</div>
            <div className="popup-message">{submitStatus}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;