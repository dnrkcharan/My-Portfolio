import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button color="inherit" href="">Home</Button>
          <Button color="inherit" href="education">Education</Button>
          <Button color="inherit" href="experience">Experience</Button>
          <Button color="inherit" href="skills">Skills</Button>
          <Button color="inherit" href="projects">Projects</Button>
          <Button color="inherit" href="contact">Contact Me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
