import React from "react";
import { Link } from "gatsby";

const About = () => {
  return (
    <main>
      <title>About Page</title>
      <h1>About Me</h1>
      <Link to="/">Link to Home Page</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};

export default About;
