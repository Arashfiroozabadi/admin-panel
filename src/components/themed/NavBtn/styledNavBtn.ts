import styled from "styled-components/macro";
import { Button } from "@material-ui/core";

import { device } from "../../../constants/breakpoint";

const StyledNavBtn= styled(Button)`
  width: 100%;
  justify-content: start;
  text-transform: inherit;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 100ms!important;
  @media ${device.mobileS}{
    
  }
  @media ${device.laptop}{
    
  }
`;

export {
  StyledNavBtn
};