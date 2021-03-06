import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import Navigation from "../Navigation"
import Footer from "../Footer"
import { Box } from "../Box"

import Global from "./global"
import theme from "../../../theme"

const MainContainer = styled(Box)`
  padding: 40px ${props => props.theme.spacing["4"]};

  @media (min-width: 768px) {
    padding: 60px 0 32px 60px;
  }

  @media (min-width: 1200px) {
    padding: 110px 0 32px 110px;
  }
`

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(undefined);
  useLayoutEffect(() => {
    // 当页面加载完毕时才有 localStorage
    setIsDark(localStorage.getItem('darkMode') === 'true');
  }, []);
  // 如果非暗色模式的话，对其进行反色处理
  const lightModeTheme = isDark ? {} : {
    colors: {
      black: {
        lightest: "#bababa",
        lighter: "#d5d5d5",
        light: "#e9e9e9",
        default: "#fff",
      },
      silver: {
        default: "#787878",
        darker: "#989898",
        darkest: "#555",
      },
      white: {
        default: "#111",
        darker: "#F7F7F7",
      },
      blue: {
        default: 'rgb(51, 51, 51)',
      },
    },
  }
  return typeof isDark === "boolean" && (
    <ThemeProvider theme={{
      ...theme,
      ...lightModeTheme,
    }}>
      <Global />
      <MainContainer
        backgroundColor="black"
        display="flex"
        element="main"
        flexDirection="column"
        fontFamily="default"
        justifyContent="space-between"
        minHeight="100vh"
        textColor="silver"
      >
        <Navigation setIsDark={setIsDark} />
        {children}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
