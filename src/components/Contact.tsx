import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';

// Make sure to bind modal to your appElement
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: "Your Name",
        reply_to: data.email
      };

      await emailjs.send(
        'service_rxxmql6',
        'template_s8faqn4',
        templateParams,
        'xHeyX4r6Ev7Erx4BK'
      );
      
      setModalIsOpen(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ContactSection id="contact">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Let's Connect</SectionTitle>
          <SectionSubtitle>Have a project in mind or just want to say hello? Drop me a message.</SectionSubtitle>
        </motion.div>
        
        <ContactGrid>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <InfoCard>
                <InfoTitle>Contact Information</InfoTitle>
                <InfoText>
                  I'm currently available for freelance work and collaborations. Feel free to reach out through any of these channels.
                </InfoText>
                <ContactDetails>
                  <ContactItem>
                    <SocialLinks>
                      <SocialLink 
                        href="https://github.com/jhoejeth13" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                      >
                        <FaGithub size={20} /> @jhoejeth13
                      </SocialLink>
                      <SocialLink 
                        href="https://linkedin.com/in/jhoejeth-mondejar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                      >
                        <FaLinkedin size={20} /> Jhoejeth Mondejar
                      </SocialLink>
                    </SocialLinks>
                  </ContactItem>
                </ContactDetails>
              </InfoCard>
            </motion.div>
          </ContactInfo>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  $hasError={!!errors.name}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  $hasError={!!errors.email}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <TextArea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  $hasError={!!errors.message}
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                />
                {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
              </FormGroup>

              <SubmitButton 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ButtonText>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ButtonText>
                {!isSubmitting && <ButtonIcon><FaPaperPlane /></ButtonIcon>}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactGrid>
      </SectionContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Form Submission Success"
      >
        <ModalContent>
          <CheckmarkCircle>
            <Checkmark />
          </CheckmarkCircle>
          <ModalTitle>Message Sent!</ModalTitle>
          <ModalText>Thanks for reaching out! I’ll get back to you as soon as I can.</ModalText>
          <ModalButton 
            onClick={closeModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Got it
          </ModalButton>
        </ModalContent>
      </Modal>
    </ContactSection>
  );
};

// Modal styles
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '24px',
    padding: '3rem',
    maxWidth: '500px',
    width: '90%',
    border: 'none',
    boxShadow: '0 10px 50px rgba(0, 0, 0, 0.2)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
};

// Styled components
const ContactSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: black;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 2px;
  }
`;

const InfoText = styled.p`
  margin-bottom: 2.5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
`;

const ContactDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

const FormGroup = styled.div<{ $hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; // Reduced gap
  border-radius: 0.5rem;
  transition: all 0.2s ease;
`;

const InputStyles = css<{ $hasError: boolean }>`
  padding: 1rem;
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background || 'rgba(255, 255, 255, 0.05)'};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
    background: ${({ theme }) => theme.colors.inputFocusBackground || 'rgba(255, 255, 255, 0.08)'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;


const Input = styled.input<{ $hasError: boolean }>`
  ${InputStyles}
`;

const TextArea = styled.textarea<{ $hasError: boolean }>`
  ${InputStyles}
  resize: vertical;
  min-height: 150px;
`;

const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-left: 0.5rem;
  font-weight: 500;
  height: 1.25rem; // Fixed height to prevent layout shift
`;

const ButtonText = styled.span`
  transition: all 0.3s ease;
`;

const ButtonIcon = styled.span`
  display: flex;
  transition: all 0.3s ease;
`;

const SubmitButton = styled(motion.button)`
  padding: 1.25rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  box-shadow: 0 4px 15px ${({ theme }) => `${theme.colors.primary}30`};

  &:disabled {
    cursor: not-allowed;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 1rem;
`;

const CheckmarkCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 3px solid #4CAF50; /* Green circle */
`;

const Checkmark = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 12px;
    top: 18px;
    width: 12px;
    height: 6px;
    border: solid #4CAF50;
    border-width: 0 0 3px 3px;
    transform: rotate(-45deg);
  }
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 1.1rem;
  max-width: 80%;
`;

const ModalButton = styled(motion.button)`
  padding: 0.875rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export default Contact;