import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box, BoxProps, ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider } from "styled-components/macro";
import styled from "styled-components/macro";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useSelector } from "react-redux";

import Search from "./views/search";
import Home from "./views/Home/Home";
import Nav from "./components/Nav/Nav";

import theme from "./ui/theme";
import palette from "./ui/palette";
import { selectors } from "./features/counter";
import { device } from "./constants/breakpoint";
import { Container, Typography } from "./components/themed";

gsap.registerPlugin(CustomEase);


const App: React.FC = () => {
  const t = useSelector(selectors.getTheme);

  useEffect(() => {
    gsap.to("body",
      {
        backgroundColor: palette.background[t],
        duration: 0.5,
        ease: CustomEase.create("bgc", "M0,0 C0.4,0 0.2,1 1,1 ")
      });

    return () => { };
  }, [t]);
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Main component="main" className="main">
            <Nav />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/search" component={Search} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </Main>
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

interface MainProps extends BoxProps {

}
const Main = styled((props: MainProps) => {
  const { ...other } = props;
  return (
    <Box {...other} />
  );
})`
  @media ${device.mobileS}{
    display: flex;
    flex-direction: column;
  }
  @media ${device.laptop}{
    display: flex;
    flex-direction: row;
  }
`;

function NoMatch() {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Typography variant="h1">
        No Match
      </Typography>
    </Container>
  );
}

export default App;
