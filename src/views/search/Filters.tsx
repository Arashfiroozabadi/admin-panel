import React from "react";

import RepoFilters from "./Repo";


interface Props {
  type: "ISSUE" | "REPOSITORY" | "USER" |""
}

function Filters({ type }: Props): JSX.Element {


  if (type === "REPOSITORY") {
    return (
      <div>
        <RepoFilters />
      </div>
    );
  }

  if (type === "USER") {
    return (
      <div>
        USER
      </div>
    );
  }

  if (type === "ISSUE") {
    return (
      <div>
        ISSUE
      </div>
    );
  }
  return (
    <div>
      please select search type
    </div>
  );
}


export default Filters;