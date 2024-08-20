import React from "react";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container id="home" sx={{ paddingTop: "2rem" }}>
      <Typography variant="h5" gutterBottom>
      DASARI NARADA RAMA KRISHNA CHARAN
      </Typography>
      <Typography variant="body1" paragraph>
        Software Engineer with 2+ years of experience in software development,
        specializing in Back-end and Front-end technologies including Python, Django, 
        PostgreSQL and React. Seeking to leverage my expertise in API
        development and full-stack solutions to contribute to a dynamic team,
        focusing on delivering high-quality, scalable software.{" "}
      </Typography>
    </Container>
  );
};

export default Home;
