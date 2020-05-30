import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Pas Trouvé" />
      <h1>Pas trouvé</h1>
      <p>Tu as demandé une route qui n&#39;existe pas ... la tristesse.</p>
      <iframe
        title="Frankie Cosmos - Outside With The Cuties"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/6IJB0aD8gSA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
