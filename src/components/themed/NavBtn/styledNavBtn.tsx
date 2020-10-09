import React from "react";
import styled from "styled-components/macro";
import { Button, ButtonProps } from "@material-ui/core";


import { device } from "../../../constants/breakpoint";

interface NavProps extends ButtonProps {

}
const StyledNavBtn = styled((props: NavProps) => {
  const { ...other } = props;
  return (
    <Button
      classes={{
        root: "root"
      }}
      {...other}
    />
  );
})`
  &.root{
    justify-content: start;
  }
  width: 100%;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: inherit;
  
  @media ${device.mobileS}{
    
  }
  @media ${device.laptop}{
    
  }
`;


export {
  StyledNavBtn
};