import { SystemState, ThemeType } from "./types";



export const getCountValue = (state: SystemState) => state.count.value;

export const getTheme= (state:ThemeType) => state.theme;