import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
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
      const response = await fetch('https://formspree.io/f/xzzgkkvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalIsOpen(true);
        reset();
      } else {
        throw new Error('Form submission failed');
      }
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
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>Have a project in mind or want to collaborate?</SectionSubtitle>
        
        <ContactGrid>
          <ContactInfo>
            <InfoCard>
              <InfoTitle>Let's talk</InfoTitle>
              <InfoText>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </InfoText>
              <ContactDetails>
                <ContactItem>
                  <ContactIcon>📩</ContactIcon>
                  <HighlightedEmail href="mailto:dodeymondejar@gmail.com">
                    dodeymondejar@gmail.com
                  </HighlightedEmail>
                </ContactItem>
                <ContactItem>
                  <SocialLinks>
                    <SocialLink href="https://github.com/jhoejeth13" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24} /> jhoejeth13
                    </SocialLink>
                    <SocialLink href="https://linkedin.com/in/jhoejeth-mondejar" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} /> Jhoejeth Mondejar
                    </SocialLink>
                  </SocialLinks>
                </ContactItem>
              </ContactDetails>
            </InfoCard>
          </ContactInfo>

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

            <SubmitButton type="submit" disabled={isSubmitting}>
              <ButtonText>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </ButtonText>
              {!isSubmitting && <ButtonIcon>→</ButtonIcon>}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </SectionContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Form Submission Success"
      >
        <ModalContent>
          <ModalIcon>✓</ModalIcon>
          <ModalTitle>Thank You!</ModalTitle>
          <ModalText>Your message has been sent successfully. I'll get back to you soon!</ModalText>
          <ModalButton onClick={closeModal}>Close</ModalButton>
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
    borderRadius: '16px',
    padding: '2.5rem',
    maxWidth: '500px',
    width: '90%',
    border: 'none',
    boxShadow: '0 5px 30px rgba(0, 0, 0, 0.3)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
    backdropFilter: 'blur(3px)',
  },
};

// Styled components
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const ModalIcon = styled.div`
  font-size: 3rem;
  color: #4BB543;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: black;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const ModalButton = styled.button`
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: all 0.3s ease;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const InfoText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ContactDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const ContactIcon = styled.span`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HighlightedEmail = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: width 0.3s ease;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputStyles = css<{ $hasError: boolean }>`
  padding: 1rem;
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? '#ff4d4f' : theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }
         background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input<{ $hasError: boolean }>`
  ${InputStyles}
`;

const TextArea = styled.textarea<{ $hasError: boolean }>`
  ${InputStyles}
  resize: vertical;
  min-height: 120px;
`;

const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const ButtonText = styled.span`
  transition: transform 0.3s ease;
  color: #000;
`;

const ButtonIcon = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  color: #000;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    
    ${ButtonText} {
      transform: translateX(3px);
    }
    
    ${ButtonIcon} {
      transform: translateX(5px);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export default Contact;