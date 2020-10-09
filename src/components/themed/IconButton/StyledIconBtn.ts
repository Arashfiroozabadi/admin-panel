import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";

import { colorTransition, bgcTransition } from "../../../constants/timing";



const StyledIconButton = styled(IconButton)`
  padding: 8px;
  transition: ${colorTransition},${bgcTransition}!important;
`;
export {
  StyledIconButton
};
