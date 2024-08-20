import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '1rem 0', marginTop: 'auto' }}>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
          Contact Me: <Link href="mailto:your-email@example.com" color="inherit">
            <EmailIcon sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> your-email@example.com
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Link href="https://github.com/your-username" color="inherit" target="_blank" rel="noopener">
            <GitHubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/your-linkedin-username" color="inherit" target="_blank" rel="noopener">
            <LinkedInIcon />
          </Link>
          <Link href="https://twitter.com/your-twitter-username" color="inherit" target="_blank" rel="noopener">
            <TwitterIcon />
          </Link>
        </Box>
        <Typography variant="body2">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
