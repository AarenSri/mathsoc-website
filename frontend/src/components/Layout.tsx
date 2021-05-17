import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "DM Sans",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2.75rem",
      color: "#201B4B",
      fontWeight: 500,
      margin: "0.75rem 0"
    },
    h4: {
      fontSize: "1.6rem",
      color: "#081f32",
      fontWeight: 600
    },
    h5: {
      fontSize: "1.45rem",
      fontWeight: 500,
      margin: "0.5rem 0"
    },
    h6: {
      fontSize: "1.3rem",
      color: "#081f32"
    },
    body1: {
      fontSize: "1.05rem",
      margin: "0.5rem 0"
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#6e798c",
      marginTop: "0.3rem"
    }
  }
});

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
