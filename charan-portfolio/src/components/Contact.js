import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container id="contact" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Typography variant="h3" gutterBottom>Contact Me</Typography>
      <Typography variant="body1">
        You can reach me at <Link href="mailto:myemail@example.com">myemail@example.com</Link>.
      </Typography>
    </Container>
  );
};

export default Contact;
