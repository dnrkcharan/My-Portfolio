import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Experience = () => {
  return (
    <Container id="experience" sx={{ paddingTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>Experience</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Software Engineer"
            secondary="Golden Hills Capital, Hyderabad (Oct 2023 - Present)"
          />
          <ul>
            <li>Developed a comprehensive crypto insights platform, integrating real-time news, technical and fundamental analysis, and portfolio management tools.</li>
            <li>Created an advanced screener tool for filtering cryptocurrencies based on technical, fundamental, quantitative, and risk factors.</li>
            <li>Implemented a dynamic news dashboard with updates from the finance team, enhancing user engagement.</li>
            <li>Built user authentication and watchlist management features, enabling secure login/signup and personalized tracking.</li>
            <li>Developed portfolio management capabilities allowing users to create, track, and analyze portfolios with comparative insights.</li>
            <li>Integrated detailed risk analysis tools to aid in informed decision-making.</li>
            <li>Led collaboration efforts with CMG engineers and designers, maintained documentation in Confluence and Jira.</li>
            <li>Enhanced query-building features with dynamic column selection and server-side filtering.</li>
            <li>Created an Excel add-in to query CMG’s DataLab GraphQL API for real-time data population in Excel sheets.</li>
            <li>Implemented secure user authentication and efficient session management for API key and subdomain handling.</li>
          </ul>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Software Development Engineer - 1"
            secondary="Cogoport, Mumbai (May 2022 - Sep 2023)"
          />
          <ul>
            <li>Led contributions in the cogo-ml repository, developing automated operations to streamline data processing and analysis.</li>
            <li>Spearheaded the development of an ML-based automation system for freight data classification and extraction.</li>
            <li>Automated data processing for 10+ lakh data points from 20 shipping lines using cron jobs and Selenium.</li>
            <li>Developed APIs using FastAPI, enabling seamless access to data for shipment tracking and rate optimization.</li>
            <li>Integrated Outlook Mail API, incorporating authentication and authorization for email management within the platform.</li>
            <li>Enhanced the organization’s web application backend, improving user-email communication features.</li>
            <li>Streamlined the admin dashboard, providing a comprehensive view of shipment-related emails for easier interactions.</li>
            <li>Designed and deployed an email classification machine learning model to improve management efficiency.</li>
          </ul>
        </ListItem>
      </List>
    </Container>
  );
};

export default Experience;
