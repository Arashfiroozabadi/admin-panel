import React, { Fragment, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
// @Material-Ui components
// import { IconButton } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";


// Local Components
import { getSearchType, getSearchQuery, getPagintion } from "../../features/gql";

import { Container, Loading, Typography, IconButton } from "../../components/themed";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SearchResult from "./SearchResult";


const SEARCH = gql`
  query search($queryString: String!, $type:SearchType!, $after:String){
    search(query: $queryString , type:$type , first:20, after:$after ) {
      repositoryCount
      issueCount
      userCount
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
      edges {
        node{
          ... on Repository{
            id
            url
            name
            issues(states:OPEN ,labels:"good first issue") {
              totalCount
            }
            updatedAt
            homepageUrl
            description
            licenseInfo {
              name
            }
            nameWithOwner
            stargazerCount
            primaryLanguage {
              name
             color
            }
          }
          ...on User{
            id
            url
            bio
            email
            login
            company
            location
            avatarUrl
            followers{
              totalCount
            }
            userName:name
            starredRepositories {
              totalCount
            }
          }
          ... on Issue {
            url
            title
            author {
              login
              url
            }
            comments{
              totalCount
            }
            createdAt
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      display: "flex",
      alignItems: "center",
    },
    paginationIconBtn: {
      padding: theme.spacing(0.5),
      margin: `0px ${theme.spacing(0.5)}px`,
      "&:hover": {
        color: "#171819!important"
      }
    }
  })
);

interface PageInfoStateTypes {
  nextPage: string | null
  pageCount: number
  pageList?: any
}

const Search: React.FC = () => {
  // React States
  const [pageInfo, setPageInfo] = useState<PageInfoStateTypes>({
    nextPage: null,
    pageCount: 1,
    pageList: [null]
  });

  // Style Hooks
  const classes = useStyles();

  // Redux States
  const gqlSearchTpye = useSelector(getSearchType);
  const gqlSearchQuery = useSelector(getSearchQuery);
  const restPagintionData = useSelector(getPagintion);

  const dispatch = useDispatch();

  // GraphQL Query
  const [getData, { loading, called, error, data }] = useLazyQuery(SEARCH, {
    variables: {
      queryString: gqlSearchQuery,
      type: gqlSearchTpye,
      after: pageInfo.nextPage
    }
  });



  // Event Handlers
  const handleNextPage = () => {
    dispatch({ type: "NO_CHANGE" });
    const endCursor = data.search.pageInfo.endCursor;
    setPageInfo({
      pageList: [...pageInfo.pageList, endCursor],
      nextPage: endCursor,
      pageCount: ++pageInfo.pageCount,
    });
  };

  const handlePrevPage = () => {
    dispatch({ type: "NO_CHANGE" });
    const array = [...pageInfo.pageList];
    if (pageInfo.pageCount > 0) {
      array.splice(-1, 1);
      setPageInfo({
        pageList: array,
        nextPage: pageInfo.pageList[pageInfo.pageCount - 2],
        pageCount: --pageInfo.pageCount,
      });
    }
  };

  useEffect(() => {
    if (restPagintionData) {
      setPageInfo({
        nextPage: null,
        pageCount: 1,
        pageList: [null]
      });
    }

    return () => { };
  }, [restPagintionData]);

  return (
    <Fragment>
      <Container>

        {/* Header */}
        <Header getQuery={() => getData()} />

        {/* Body */}
        <Main >
          {
            !called ? "" :
              loading ? <Loading type="cylon" /> :
                error ? <Typography>error {error.message}</Typography> :
                  data.search.edges.length === 0 ? <Typography>404</Typography> :
                    <div>
                      <SearchResult items={data.search} />
                    </div>
          }
        </Main>

        {/* Footer */}
        <Footer >
          <div className={classes.pagination} >
            {
              !called ? "" : loading ? "" :
                <>
                  <IconButton
                    className={clsx(classes.paginationIconBtn)}
                    type="button"
                    cy-data="go-back-button"
                    disabled={!data.search.pageInfo.hasPreviousPage}
                    onClick={handlePrevPage}
                  >
                    <NavigateBefore />
                  </IconButton>
                  <Typography>
                    {pageInfo.pageCount}
                  </Typography>
                  <IconButton
                    color="primary"
                    type="button"
                    className={clsx(classes.paginationIconBtn)}
                    cy-data="go-next-button"
                    disabled={!data.search.pageInfo.hasNextPage}
                    onClick={handleNextPage}
                  >
                    <NavigateNext />
                  </IconButton>
                </>
            }
          </div>
        </Footer>
      </Container>
    </Fragment>
  );
};

export default Search;




