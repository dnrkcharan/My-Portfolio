import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container id="about" sx={{ paddingTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1" paragraph>
        I'm a passionate developer with experience in React and other technologies.
      </Typography>
    </Container>
  );
};

export default About;
