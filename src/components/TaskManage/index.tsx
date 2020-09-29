import React, { useEffect, useState, useRef } from "react";
import {
  useSelector,
  // useDispatch
} from "react-redux";
import {
  Button,
  // Fade
} from "@material-ui/core";
import styled from "styled-components/macro";
import gsap from "gsap";

import {
  TaskSelector,
  // actions
} from "../../features/taskmanage";
import { Modal } from "..";

import { device } from "../../constants/breakpoint";

import { Typography } from "../themed";

import TaskLists from "./TaskLists";
import Form from "./Form";

// import { selectors } from "../../features/counter";

interface PropsType {

}

export default (props: PropsType) => {
  const refModal = useRef(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // const t = useSelector(selectors.getTheme);
  const tasks = useSelector(TaskSelector.getTasks);
  // const dispatch = useDispatch();

  const modalAnim = () => {
    gsap.set(refModal.current, { opacity: 0, y: -100 });
    gsap.to(refModal.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    modalAnim();
  };
  const handleClose = () => {
    gsap.to(refModal.current,
      {
        opacity: 0,
        y: -100,
        duration: 0.5,
        onComplete: () => {
          setOpenModal(!openModal);
        }
      }
    );
  };

  useEffect(() => {
    return;
  }, []);
  return (
    <Container>
      <Typography variant="h5" gutterBottom>Daily Tasks</Typography>
      <Button variant="contained"
        onClick={handleOpenModal}
      >
        Add New Task
      </Button>
      <ListItems>
        {tasks.map((item) => (
          <TaskLists key={item.id} data={item} />
        ))}
      </ListItems>
      <Modal
        closeAfterTransition
        keepMounted
        open={openModal}
        onClose={handleClose}
      >
        <FormContainer>
          <Form close={handleClose} ref={refModal} />
        </FormContainer>
      </Modal>
    </Container>
  );
};


const Container = styled.div`
  
  @media ${device.mobileS}{
    padding: 16px;
  }
  @media ${device.laptop}{
    padding: 16px 0px;
  }
`;
const FormContainer = styled.div`
  outline: none;
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 75%;
  }
`;
const ListItems = styled.div`
  margin: 10px 0px;
  padding: 0px 5px;
  display: flex;
  flex-wrap: wrap;
`;
