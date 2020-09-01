import React from "react";
import styled from "styled-components/macro";
import { Paper } from "@material-ui/core";

import { useSelector } from "react-redux";

import { selectors } from "../../features/counter";
import palette from "../../ui/palette";

import reactLogo from "./logo192.png";
const Logo = styled(Paper)`
  display:flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  transition: background-color 0.5s cubic-bezier(0.4,0,0.2,1) 0s!important;
`;

export default () => {
  const t = useSelector(selectors.getTheme);
  return (
    <Logo
      style={{
        backgroundColor: palette.background[t]
      }}
      elevation={0}
    >
      <img src={reactLogo} alt="" srcSet={`${reactLogo} 3x`} />
    </Logo>
  );
};