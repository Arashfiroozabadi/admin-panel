export enum CounterActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface CounterBaseAction {
  type: CounterActionTypes;
}

export interface IncrementCounter extends CounterBaseAction {
  type: CounterActionTypes.INCREMENT_COUNTER;
}

export interface DecrementCounter extends CounterBaseAction {
  type: CounterActionTypes.DECREMENT_COUNTER;
}

export type CounterActions =
  | IncrementCounter
  | DecrementCounter;

export interface SystemState {
  count: {
    value: number
  }
}

// Theme >=>>
export enum ThemeActionTypes {
  CHANGE_THEME="CHANGE_THEME"

}
interface ThemeBaseAction {
  type: ThemeActionTypes;
} export interface CHANGE_THEME extends ThemeBaseAction{
  type: ThemeActionTypes.CHANGE_THEME
}
export type ThemeActions = CHANGE_THEME


 export interface ThemeType{
  theme: "dark" | "light";
}


// Theme <<==< 