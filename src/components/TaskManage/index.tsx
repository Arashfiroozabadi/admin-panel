import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@material-ui/core";

import { TaskSelector, actions } from "../../features/taskmanage";

import TaskLists from "./TaskLists";
// import { selectors } from "../../features/counter";

interface PropsType {

}

export default (props: PropsType) => {
  const tasks = useSelector(TaskSelector.getTasks);
  const dispatch = useDispatch();
  // const t = useSelector(selectors.getTheme);
  useEffect(() => {
    return;
  }, []);
  return (
    <div>
      <h1>Task Manager</h1>
      <Button variant="contained"
        onClick={() => dispatch(actions.addTask({
          id: 1,
          title: "new team",
          caption: "do all test",
        }))}
      >
        Add New Task
      </Button>
      <div>
        {tasks.map((item) => (
          <TaskLists key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
