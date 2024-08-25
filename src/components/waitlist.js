import React, { useState } from 'react';
import styled from 'styled-components';
/*styling for the webpage */
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #f0f0f0 100%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #333;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Waitlist = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault(); /*this is needed to be changed to a modal sheet */
    try {
        await fetch('https://sheetdb.io/api/v1/tu9hdmgufewco', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: { email } }),
        });
        alert('Thanks for signing up!');
      } catch (error) {
        alert('Error signing up');
      }
  };

  return (
    <HeroSection>
      <Title>Join URent Now</Title>
      <Description>
        Spontaneous renting made easy. Be the first to experience URent!
      </Description>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Join the Waitlist</Button>
      </Form>
    </HeroSection>
  );
};

export default Waitlist;
