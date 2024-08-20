import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Skills = () => {
  return (
    <Container id="skills" sx={{ paddingTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>Skills</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Programming Languages"
            secondary="Python, SQL, HTML5, JavaScript, TypeScript"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Web Technologies"
            secondary="Django, GraphQL, React, FastAPI, Peewee ORM, Outlook Graph API"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Database Management"
            secondary="PostgreSQL, MySQL, Redis"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Automation"
            secondary="Material-UI, Selenium, BeautifulSoup, Celery, Microsoft Power Automate"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Data Analysis"
            secondary="Pandas, Numpy"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Deployment"
            secondary="Docker, CI/CD Pipelines"
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default Skills;
