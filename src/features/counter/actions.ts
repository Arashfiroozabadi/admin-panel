import { CounterActionTypes, CounterActions, ThemeActions, ThemeActionTypes } from "./types";

const incrementCounter = (): CounterActions => {
  return {
    type: CounterActionTypes.INCREMENT_COUNTER
  };
};

const decrementCounter = (): CounterActions => {
  return {
    type: CounterActionTypes.DECREMENT_COUNTER
  };
};

// >==>> Theme
const changeTheme=():ThemeActions => {
  return {
    type: ThemeActionTypes.CHANGE_THEME
  };
};


// Theme <<==<

export default {
  incrementCounter,
  decrementCounter,
  changeTheme
};
