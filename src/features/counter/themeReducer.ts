import { ThemeActionTypes, ThemeActions } from "./types";

const initialState = "light";


export default (state = initialState, action: ThemeActions):string => {

  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      return state === "dark" ? "light": "dark";
    default:
      return state;
  }
};
