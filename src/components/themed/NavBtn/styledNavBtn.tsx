import React from "react";
import styled from "styled-components/macro";
import { Button, ButtonProps } from "@material-ui/core";


import { device } from "../../../constants/breakpoint";
import { colorTransition } from "../../../constants/timing";

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
    transition: ${colorTransition};
  }
  width: 100%;
  text-transform: inherit;
  
  @media ${device.mobileS}{
    
  }
  @media ${device.laptop}{
    
  }
`;


export {
  StyledNavBtn
};