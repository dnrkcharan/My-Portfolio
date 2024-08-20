import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Education = () => {
  return (
    <Container id="education" sx={{ paddingTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>Education</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="National Institute of Technology, Andhra Pradesh (2018 - 2022)"
            secondary="Bachelor of Technology in Electrical and Electronics Engineering | CGPA: 7.09/10"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Board of Intermediate Education, Andhra Pradesh (2015 - 2017)"
            secondary="Intermediate in Maths, Physics, and Chemistry (MPC) | Percentage: 96.1%"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Board of Secondary Education, Andhra Pradesh (2015)"
            secondary="Secondary School Certificate (SSC) | CGPA: 9.7/10"
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default Education;
