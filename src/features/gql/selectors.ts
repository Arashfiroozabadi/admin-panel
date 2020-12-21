import { SearchQueryTypes } from "./reducer";

export interface SearchType {
  searchType: "REPOSITORY" | "USER" | "ISSUE"
}

interface SearchQuery {
  searchQuery: SearchQueryTypes
}

export const getSearchType = (state: SearchType) => state.searchType;
export const getSearchQuery = (state: SearchQuery) => state.searchQuery;