export interface SearchType {
  searchType: "REPOSITORY" | "USER" | "ISSUE"
}

interface SearchQuery {
  searchQuery: string
}
interface Pagintion {
  pagintion: boolean
}

export const getSearchType = (state: SearchType) => state.searchType;
export const getSearchQuery = (state: SearchQuery) => state.searchQuery;
export const getPagintion = (state: Pagintion) => state.pagintion;