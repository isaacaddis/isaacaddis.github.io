import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"

interface Props {
  location: Location
}

const IndexPage = ({ location }: Props) => {
  const siteTitle = "Isaac Addis"
  return (
    < Layout location={location} title={siteTitle} >
      <SEO
        description="Isaac Addis' web portfolio."
        title="Home"
        keywords={[`isaac`, `addis`, `javascript`, `react`]}
      />
      <img style={{ margin: 0 }} src="./sotenbori.jpg" alt="Soutenbori (Yakuza 0)" />
    </Layout >
  );
}

export default IndexPage
