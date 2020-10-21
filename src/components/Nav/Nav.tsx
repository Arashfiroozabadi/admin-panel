import React, {
  Fragment, useEffect, useRef, useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Brightness2, GitHub } from "@material-ui/icons";
import gsap, { TimelineMax } from "gsap";
import { Box } from "@material-ui/core";
import { WbSunny } from "@material-ui/icons";

import {
  actions, selectors
} from "../../features/counter";

import {
  IconButton,
  NavBtn
} from "../themed";

import { StyledNav } from "./StyledNav";

import "./nav.scss";
import { NavHeader } from "./Header";
import { MenuBtn } from "./MenuBtn";
import Wrapper from "./Wrapper";


const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const dispatch = useDispatch();
  const t = useSelector(selectors.getTheme);
  const nav = useRef(null);
  const div = useRef(null);

  const timeLine = new TimelineMax({ paused: true });
  // const handleShow = () => {
  //   setOpenMenu(!openMenu);
  //   gsap.to(".navlist", {
  //     x: openMenu ? -500 : 0,
  //     duration: 0.5,
  //     lazy: false
  //   });
  // };


  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    const width = gsap.getProperty("body", "width");
    timeLine.set(nav.current, { width: width === 320 ? "100%" : "5%" });
    timeLine.set(div.current, { width: "60%" });
    return () => { };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const width = gsap.getProperty("body", "width");
    if (openMenu) {
      if (width > 300 && width < 770) {
        timeLine
          .to(nav.current,
            {
              duration: 0.5,
              width: "100%",
              height: 50,
            },
            0
          )
          .to(div.current, { duration: 0.3, width: "60%" }, 0.3)
          .play();
      } else {
        timeLine
          .to(nav.current,
            {
              duration: 0.5,
              width: "5%",
              height: "initial",
            },
            0
          )
          .to(div.current, { duration: 0.3, width: "60%" }, 0.3)
          .play();
      }
    } else {
      if (width > 300 && width < 770) {
        timeLine
          .to(
            nav.current,
            {
              duration: 0.5,
              width: "100%",
              height: 240
            }
          )
          .to(div.current,
            {
              duration: 0.5,
              width: "calc(100% - 20px)"
            }, 0)
          .play();
      } else {
        timeLine
          .to(nav.current,
            {
              duration: 0.5,
              width: "20%",
              height: "initial",
            }
            ,
            0.2
          )
          .to(div.current, { duration: 0.5, width: "calc(100% - 20px)" }, 0)
          .play();
      }
    }
    return () => { };
  }, [openMenu, timeLine]);

  return (
    <Fragment>
      <StyledNav
        ref={nav}
        className="navlist"
      >
        <NavHeader>
          <MenuBtn btntype="navMenu" onClick={handleOpenMenu} />
        </NavHeader>
        <Wrapper ref={div}>
          <NavBtn
            to="/"
            title={!openMenu ? "Dashboard" : ""}
            navclass="nav_link"
            startIcon={<DashboardIcon />}
          />
          <NavBtn
            to="/search"
            title={!openMenu ? "Search in github" : ""}
            navclass="nav_link"
            startIcon={<GitHub />}
          />
        </Wrapper>
        <Box padding="10px" display="flex" alignItems="center">
          <IconButton
            btntype="theme"
            size="small"
            onClick={() =>
              dispatch(actions.changeTheme())
            }
          >
            {t === "dark" ? <WbSunny /> : <Brightness2 />}
          </IconButton>
        </Box>
      </StyledNav>
    </Fragment>
  );
};

export default Nav;
