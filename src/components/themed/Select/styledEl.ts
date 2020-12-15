import styled from "styled-components/macro";
import { Select as MUIselect } from "@material-ui/core";

interface PropsTypes {
  tcolor: string
}

const Select = styled(MUIselect) <PropsTypes>`
  &>.root{
    color:  ${props => props.tcolor};
  }
`;


export {
  Select
};