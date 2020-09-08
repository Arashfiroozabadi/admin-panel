import React from "react";
import { Modal, ModalProps } from "@material-ui/core";
import styled from "styled-components/macro";

interface PropsType extends ModalProps {
}

export default (props: PropsType) => {
  const { children, ...other } = props;
  return (
    <StyledModal
      {...other}
    >
      {children}
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  background-color: red;
  padding:2em;
`;
