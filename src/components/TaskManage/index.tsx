import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";

import { TaskSelector, actions } from "../../features/taskmanage";
import { Modal } from "..";

import TaskLists from "./TaskLists";
import Form from "./Form";



// import { selectors } from "../../features/counter";

interface PropsType {

}

export default (props: PropsType) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const tasks = useSelector(TaskSelector.getTasks);
  const dispatch = useDispatch();
  // const t = useSelector(selectors.getTheme);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleClose = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    return;
  }, []);
  return (
    <Container>
      <h1>Daily Tasks</h1>
      <Button variant="contained"
        onClick={
          handleOpenModal
          // () => dispatch(actions.addTask({
          //   id: 1,
          //   title: "new team",
          //   caption: "do all test",
          // }))
        }
      >
        Add New Task
      </Button>
      <ListItems>
        {tasks.map((item) => (
          <TaskLists key={item.id} data={item} />
        ))}
      </ListItems>
      <Modal
        open={openModal}
        onClose={handleClose}
      >
        <div>
          <Form />
        </div>
      </Modal>
    </Container>
  );
};


const Container = styled.div`
  
`;
const ListItems = styled.div`
  margin: 10px 0px;
  padding: 0px 5px;
  display: flex;
  flex-wrap: wrap;
`;
