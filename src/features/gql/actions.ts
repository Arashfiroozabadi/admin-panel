import { SearchActionType, SearchType } from "./index";

const repoAction = (): SearchType => {
  return {
    type: SearchActionType.REPOSITORY
  };
};

const userAction = (): SearchType => {
  return {
    type: SearchActionType.USER
  };
};

const issueAction = (): SearchType => {
  return {
    type: SearchActionType.ISSUE,
  };
};

export default {
  repoAction,
  userAction,
  issueAction
};