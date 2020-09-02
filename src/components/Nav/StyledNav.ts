import styled from "styled-components/macro";
import { List, ListItem } from "@material-ui/core";

import { device } from "../../constants/breakpoint";


const StyledNav = styled(List)`
  ${({ theme }) => `
    will-change: background-color;
    padding: 0 20px;
    overflow: hidden;
    @media ${device.mobileS}{
      display: none;
    }
    @media ${device.laptop}{
      display: flex;
      flex-direction: column;
    }
  `}
`;

const NavItem = styled(ListItem)`
  ${({ theme }) => `
    align-items: stretch
    box-sizing: content-box;
    padding: 20px;
    
    a {
      align-items: center;
      color: ${theme.palette.primary.contrastText};
      display: flex;
      justify-content: center;
      text-decoration: none;

      &:hover {
        color: ${theme.palette.primary.dark};
      }
    }
  `}
`;

export { StyledNav, NavItem };
