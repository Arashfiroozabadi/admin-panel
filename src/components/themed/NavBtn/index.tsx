import React from "react";
import { useSelector } from "react-redux";
import { ButtonProps } from "@material-ui/core";

import { NavLink, NavLinkProps } from "react-router-dom";

import { selectors } from "../../../features/counter";
import palette from "../../../ui/palette";

import { StyledNavBtn } from "./styledNavBtn";


interface PropsTypes extends ButtonProps {
  title: string
  to: string | object
  navclass?: string
}

export default (props: PropsTypes) => {
  const { title, to, navclass } = props;

  const t = useSelector(selectors.getTheme);

  return (
    <NavLink
      className={navclass}
      to={to}
      exact
      activeStyle={{
        backgroundColor: palette.primary[t]
      }}
      style={{
        borderRadius: 4,
        transition: `background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 100ms!important`
      }}
    >
      <StyledNavBtn
        {...props}
        // variant="contained"
        style={{
          color: "#DDE7F0",
        }}
      >
        {title}
      </StyledNavBtn>
    </NavLink>

  );
};