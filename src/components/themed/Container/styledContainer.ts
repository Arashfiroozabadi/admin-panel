import { Container } from "@material-ui/core";
import styled from "styled-components/macro";

const StyledContainer = styled(Container)`
  margin:5px;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export {
  StyledContainer
};