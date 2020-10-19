import React from "react";
import { useSelector } from "react-redux";
import { ButtonProps } from "@material-ui/core";

import { NavLink } from "react-router-dom";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { bgcTransition, } from "../../../constants/timing";

import { StyledNavBtn } from "./styledNavBtn";


interface PropsTypes extends ButtonProps {
  title: string
  to: string | object
  navclass?: string
}

export default (props: PropsTypes) => {
  // Props
  const { title, to, navclass } = props;

  // Hooks

  // Redux
  const t = useSelector(selectors.getTheme);


  // Element Body
  return (
    <NavLink
      className={navclass}
      to={to}
      exact
      activeStyle={{
        backgroundColor: palette.icon.nav.active.bgc[t],
      }}
      style={{
        borderRadius: 4,
        transition: `${bgcTransition}`
      }}
    >
      <StyledNavBtn
        {...props}
        // variant="contained"
        style={{
          color: palette.icon.nav.color[t],
        }}
      >
        {title}
      </StyledNavBtn>
    </NavLink>

  );
};