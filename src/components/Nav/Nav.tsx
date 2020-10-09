import React, {
  Fragment, useEffect, useRef, useState,
} from "react";
import { useDispatch } from "react-redux";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { GitHub } from "@material-ui/icons";
import gsap, { TimelineMax } from "gsap";
import { Button } from "@material-ui/core";

import {
  actions
} from "../../features/counter";

import {
  NavBtn
} from "../themed";

import { StyledNav, NavItem } from "./StyledNav";

import "./nav.scss";
import { NavHeader } from "./Header";
import { MenuBtn } from "./MenuBtn";
import Wrapper from "./Wrapper";


const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(true);
  // const theme = useTheme();
  const dispatch = useDispatch();
  // const t = useSelector(selectors.getTheme);
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
    if (width > 300 && width < 700) {
      console.log(width);
    }

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
            to="/about"
            title={!openMenu ? "About" : ""}
            navclass="nav_link"
            startIcon={<GitHub />}
          />
        </Wrapper>
        <NavItem button >
          <div>
            <Button
              onClick={() =>
                dispatch(actions.changeTheme())
              }
            >
              change Theme
          </Button>
          </div>
        </NavItem>
      </StyledNav>
    </Fragment>
  );
};

export default Nav;
