import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

interface Props {
    siteTitle: string,
    menuLinks?: any
}
const Header = ({ siteTitle, menuLinks }: Props) => (

    <nav>
        <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map((link: any) => (
                <li
                    key={link.name}
                    style={{
                        listStyleType: `none`,
                        padding: `1rem`,
                    }}
                >
                    <Link style={{ color: `black` }} to={link.link}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>

)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header