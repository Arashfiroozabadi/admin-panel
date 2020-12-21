import React, {
  Fragment
} from "react";
import styled from "styled-components/macro";
import {
  useHistory
} from "react-router-dom";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
// @Material-Ui components
import { Button } from "@material-ui/core";


// Local Components
import { useSelector } from "react-redux";

import { Container, Loading, Typography } from "../../components/themed";

import { device } from "../../constants/breakpoint";

import { getSearchType, getSearchQuery } from "../../features/gql";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SearchResult from "./SearchResult";


const VIEW_USER = gql`
 query MyUser{
   viewer {
     login
     id
     email
   }
 }
`;

const SEARCH = gql`
  query search($queryString: String!, $type:SearchType!){
    search(query: $queryString , type:$type , first:10 ) {
      repositoryCount
      issueCount
      userCount
      edges {
        node{
          ... on Repository{
          id
          url
          name
          updatedAt
          homepageUrl
          description
          nameWithOwner
          stargazerCount
          primaryLanguage {
            name
            color
          }
          }
          ...on User{
            userName:name
          }
        }
      }
    }
  }
`;

const GET_USER = gql`
  query Test($login:String!){
    user(login:$login){
      location
    }
  }
`;

function User({ login }: { login: string }) {
  // GraphQL
  const { loading, error, data } = useQuery(GET_USER, { variables: { login } });

  if (loading) return <Loading type="bars" />;
  if (error) return <p>error {error.message}</p>;

  return (
    <div>
      {data.user.location}
    </div>
  );
}

const Search: React.FC = () => {
  const history = useHistory();

  // Redux State
  const gqlSearchTpye = useSelector(getSearchType);
  const gqlSearchQuery = useSelector(getSearchQuery);

  // GraphQL Query
  const [getData, { loading, called, error, data }] = useLazyQuery(SEARCH, {
    variables: {
      queryString: gqlSearchQuery,
      type: gqlSearchTpye
    }
  });

  // const { loading, error, data } = useQuery(
  //   SEARCH,
  //   {
  //     variables: {
  //       queryString: gqlSearchQuery,
  //       type: gqlSearchTpye
  //     }
  //   }
  // );
  return (
    <Fragment>
      <Container>
        <Header getQuery={() => getData()} />
        <Main >
          {
            !called ? "" :
              loading ? <Loading type="cylon" /> :
                error ? <Typography>error {error.message}</Typography> :
                  data.search.edges.length === 0 ? <Typography>404</Typography> :
                    <div>
                      <SearchResult items={data.search} />
                      {/* <Typography>
                        Search result counts : {data.search.repositoryCount}
                      </Typography>
                      {data.search.edges.map(((item: any) => (
                        <Typography key={item.node.id} variant="h2">
                          {
                            item.node.nameWithOwner ? item.node.nameWithOwner : item.node.userName
                          }
                        </Typography>
                      )))
                      }
                      <br /> */}
                    </div>
          }

          {/* {
            loading ? <Loading type="cylon" /> :
              error ? <Typography>error {error.message}</Typography> :
                data.search.edges.length === 0 ? <Typography>404</Typography> :
                  <div>
                    {data.search.edges.map(((item: any) => (
                      <Typography key={item.node.id} variant="h2">
                        {
                          item.node.nameWithOwner ? item.node.nameWithOwner : item.node.userName
                        }
                      </Typography>
                    )))
                    }
                    <br />
                  </div>
          } */}
        </Main>
        <Footer >
          <div>
            <Button
              variant="contained"
              color="primary"
              type="button"
              className="btn"
              cy-data="go-back-button"
              onClick={() => history.push("/")}
            >
              Go back
            </Button>
          </div>
        </Footer>
      </Container>
    </Fragment>
  );
};

export default Search;




