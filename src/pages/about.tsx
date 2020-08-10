import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Button from "../components/button"
import styled from "styled-components"

interface Props {
    location: Location,
}

const About = ({ location }: Props) => {
    const siteTitle = "Isaac Addis"
    return (
        < Layout location={location} title={siteTitle} >
            <p>Hello! I am a <strong>sophomore</strong> studying Computer Science at <a href="https://www.cornell.edu/">Cornell</a>.</p>
            <p>I have a keen interest in building robust and scalable <strong>React</strong> and <strong>Typescript</strong> applications.</p>
            <p>So far, I have taken:
                    <ul style={{ paddingLeft: "1em " }}>
                    <li>CS 2112 - Honors Data Structures and Algorithms</li>
                    <li>CS 2800 - Discrete Structures</li>
                    <li>CS 3110 - Functional Programming and Data Structures</li>
                    <li>MATH 2210 - Linear Algebra</li>
                </ul>
            </p>
            <p>
                I'm currently looking for related work or internships.
                If you would like to get in contact with me about a potential opportunity, please feel free to reach out at <a href="mailto:isaacaddis21@gmail.com">my email here</a>.</p>
        </Layout >
    );
}

export default About

const Wrapper = styled.div`
                min-height: 100vh;
              `
