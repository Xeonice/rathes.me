import React from "react"
import { Link as RouterLink, graphql, useStaticQuery } from "gatsby"
import styled, { useTheme } from "styled-components"

import Logo from "../Logo"

import Link from "../Link"

const Separator = styled.span`
  display: inline-block;
  margin: 0 8px;
  color: ${props => props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.default};

  @media (max-width: 374px) {
    margin: 0 4px;
    font-size: ${props => props.theme.fontSize.base};
  }

  &:before {
    content: "/";
  }
`

const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`

const MenuItem = styled(Link)`
  color: ${props => props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.default};
  font-weight: 600;

  @media (max-width: 374px) {
    font-size: ${props => props.theme.fontSize.base};
  }
`

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "files/resume.pdf" }) {
        publicURL
      }
    }
  `)

  const theme = useTheme()

  return (
    <NavigationContainer>
      <MenuItem
        element={RouterLink}
        to="/"
        aria-label="Home"
        activeStyle={{ color: theme.colors.white.default }}
      >
        <Logo />
      </MenuItem>
      <Separator />
      <MenuItem
        activeStyle={{ color: theme.colors.white.default }}
        element={RouterLink}
        to="/about"
      >
        About
      </MenuItem>
      <Separator />
      <MenuItem
        activeStyle={{ color: theme.colors.white.default }}
        href={data.resume.publicURL}
        aria-label="Resume"
      >
        Resume
      </MenuItem>
      <Separator />
      <MenuItem
        activeStyle={{ color: theme.colors.white.default }}
        element={RouterLink}
        to="/work"
      >
        Work
      </MenuItem>
      <Separator />
      <MenuItem
        activeStyle={{ color: theme.colors.white.default }}
        element={RouterLink}
        to="/writings"
      >
        Writings
      </MenuItem>
    </NavigationContainer>
  )
}

export default Navigation
