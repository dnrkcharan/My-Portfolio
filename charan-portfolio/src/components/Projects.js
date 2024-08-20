import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Projects = () => {
  return (
    <Container id="projects" sx={{ paddingTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>Projects</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Electric Vehicle Scheduling with Load Forecasting and Real-Time Pricing using Deep Learning (2022)"
            secondary="• Developed a user-friendly GUI for EV users to schedule their EVs based on load forecasting and dynamic pricing.\n• Forecasted load at a particular station and scheduled EVs within forecasted load limits."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Student-Faculty Database Management (2021)"
            secondary="• Created a database containing student and faculty information using MySQL and Python.\n• Developed an algorithm to map student interests with corresponding faculty specializations."
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default Projects;
