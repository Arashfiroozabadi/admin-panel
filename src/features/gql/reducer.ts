import { SearchBaseAction, SearchActionType } from ".";

const initialState = "REPOSITORY";

export const SearchTypeReducer = (state = initialState, action: SearchBaseAction) => {
  switch (action.type) {
    case SearchActionType.REPOSITORY:
      return "REPOSITORY";
    case SearchActionType.USER:
      return "USER";
    case SearchActionType.ISSUE:
      return "ISSUE";
    default:
      return state;
  }
};

export interface SearchQueryTypes {
  type: "SEARCH_QUERY"
  payload: string | undefined | null
}

export const searchQueryReducer = (state = "", action: SearchQueryTypes) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return action.payload;
    default:
      return state;
  }
};
interface PagintionTypes {
  type: "CHANGE" | "NO_CHANGE"
}
// REST_PAGINTION_DATA
export const pagintionReducer = (state = false, action: PagintionTypes) => {
  switch (action.type) {
    case "CHANGE":
      return true;
    case "NO_CHANGE":
      return false;
    default:
      return state;
  }
};