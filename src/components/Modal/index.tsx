import React from "react";
import { Modal, ModalProps } from "@material-ui/core";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { selectors } from "../../features/counter";
import palette from "../../ui/palette";
import { device } from "../../constants/breakpoint";

interface PropsType extends ModalProps {
}

export default (props: PropsType) => {
  const { children, ...other } = props;
  const t = useSelector(selectors.getTheme);
  return (
    <StyledModal
      style={{

      }}
      BackdropProps={{
        className: "back_drop",
        style: {
          backgroundColor: palette.modal[t],
        }
      }}
      {...other}
    >
      {children}
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS}{
    padding:1em;
  }
  @media ${device.tablet}{
    padding:2em;
  }
`;
