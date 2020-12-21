import { getSearchType, getSearchQuery } from "./selectors";
import { SearchTypeReducer, searchQueryReducer } from "./reducer";
import searchActions from "./actions";
enum SearchActionType {
  REPOSITORY = "REPOSITORY",
  USER = "USER",
  ISSUE = "ISSUE"
}

export interface repo {
  type: SearchActionType.REPOSITORY
}
export interface user {
  type: SearchActionType.USER
}
export interface issue {
  type: SearchActionType.ISSUE
}
export interface SearchBaseAction {
  type: SearchActionType
}

export type SearchType = repo | user | issue

export {
  getSearchType,
  searchActions,
  SearchActionType,
  SearchTypeReducer,
  getSearchQuery,
  searchQueryReducer
};
