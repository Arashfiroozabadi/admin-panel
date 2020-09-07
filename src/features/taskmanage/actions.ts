import { TaskActions, TaskActionType, TaskStateType } from "./reducer";

const addTask = (payload: TaskStateType): TaskActions => {
  return {
    type: TaskActionType.ADD_NEW_TASK,
    payload: payload
  };
};

export default {
  addTask
};