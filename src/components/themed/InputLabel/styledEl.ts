import styled from "styled-components/macro";
import { InputLabel } from "@material-ui/core";

interface PropsTypes {
  tcolor: string
  bgc: string
}

const Label = styled(InputLabel) <PropsTypes>`
  &.root{
    color:  ${props => props.tcolor};
    background-color: ${props => props.bgc};
  }
`;


export {
  Label
};