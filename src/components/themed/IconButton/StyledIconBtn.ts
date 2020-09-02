import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";

import { colorTransition, bgcTransition } from "../../../constants/breakpoint";



const StyledIconButton = styled(IconButton)`
  padding: 8px;
  transition: ${colorTransition},${bgcTransition}
`;
export {
  StyledIconButton
};
