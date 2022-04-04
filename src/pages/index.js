import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <p>I'm making this by following the gatsby tutorial</p>
      <StaticImage
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
