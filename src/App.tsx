import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components/macro";

import gsap from "gsap";

import { useSelector } from "react-redux";

import About from "./views/About/About";
import Home from "./views/Home/Home";
import Nav from "./components/Nav/Nav";

import theme from "./ui/theme";
import palette from "./ui/palette";
import { selectors } from "./features/counter";

const App: React.FC = () => {
  const t = useSelector(selectors.getTheme);

  useEffect(() => {
    gsap.to("body", { backgroundColor: palette.background[t], duration: 0.5, ease: "ease-out" });

    return () => { };
  }, [t]);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Box component="main" className="main">
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
            </Switch>
          </Box>
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
