import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from 'prop-types';

//@ts-ignore
import { rhythm, scale } from "../utils/typography"
import { Helmet } from "react-helmet";
import Header from "./header";

interface Props {
  location: Location
  title: string
  children?: any
}
//@ts-ignore
const rootPath = `${__PATH_PREFIX__}/`
//@ts-ignore
const blogPath = `${__PATH_PREFIX__}/blog/`

const Layout = ({ location, title, children }: Props) => {

  let header;

  if (location.pathname === rootPath || location.pathname === blogPath) {
    header = (
      <>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      </>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  console.log(`Using header`)
  console.log(header)


  return (
    <Wrapper>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
          <p style={{ margin: `10` }}>Computer Science @ Cornell '23</p>
          <div style = {{ width: "auto", marginLeft: "auto", marginRight: "auto"}}>
            <StaticQuery
              query={graphql`
              query {
                site {
                  siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                    }
                  }
                }
              }
            `}
              render={data => (
                <React.Fragment>
                  <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
                </React.Fragment>
              )}
            />
          </div>
        </header>
        <main>{children}</main>
      </div>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
        min-height: 100vh;
      `

const Footer = styled.footer`
        text-align: center;
        margin: 24px;
      `

export default Layout
