import React, {
  Fragment, useEffect, useRef,
} from "react";
import { useDispatch } from "react-redux";
import DashboardIcon from "@material-ui/icons/Dashboard";

import { Button } from "@material-ui/core";

import {
  actions
} from "../../features/counter";

import {
  NavBtn
} from "../themed";

import { StyledNav, NavItem } from "./StyledNav";

import "./nav.scss";
import Logo from "./Logo";


const Nav: React.FC = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  // const theme = useTheme();
  const dispatch = useDispatch();
  // const t = useSelector(selectors.getTheme);
  const nav = useRef(null);
  // const handleShow = () => {
  //   setOpenMenu(!openMenu);
  //   gsap.to(".navlist", {
  //     x: openMenu ? -500 : 0,
  //     duration: 0.5,
  //     lazy: false
  //   });
  // };
  useEffect(() => {
    // gsap.set(".navlist", { x: -500 });
    return () => { };
  }, []);
  return (
    <Fragment>
      <StyledNav
        ref={nav}
        className="navlist"
      >
        <Logo />
        <NavBtn
          to="/"
          title="Dashboard"
          navclass="nav_link"
          startIcon={<DashboardIcon />}
        />
        <NavBtn
          to="/about"
          title="About"
          navclass="nav_link"
          startIcon={<DashboardIcon />}
        />
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
