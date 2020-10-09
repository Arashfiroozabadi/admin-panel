import { Container } from "@material-ui/core";
import styled from "styled-components/macro";

import { device } from "../../../constants/breakpoint";
import { bgcTransition } from "../../../constants/timing";

const StyledContainer = styled(Container)`
  margin:5px;
  transition: ${bgcTransition};
  @media ${device.mobileS}{
    padding:0;
    border-radius: 0;
  }
  @media ${device.laptop}{
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export {
  StyledContainer
};