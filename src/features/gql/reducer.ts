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