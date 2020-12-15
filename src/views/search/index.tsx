import React, {
  Fragment
} from "react";
import styled from "styled-components/macro";
import {
  useHistory
} from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
// @Material-Ui components
import { Button } from "@material-ui/core";


// Local Components
import { Container, Loading, Typography } from "../../components/themed";

import { device } from "../../constants/breakpoint";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


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
  query search($queryString: String!){
    search(query: $queryString , type:REPOSITORY , first:10 ) {
      repositoryCount
      edges {
        node{
          ... on Repository{
          id
          name
          nameWithOwner
          homepageUrl
          url
          updatedAt
          stargazerCount
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

  const { loading, error, data } = useQuery(
    SEARCH,
    {
      variables: {
        "queryString": "react language:JavaScript"
      }
    }
  );
  if (loading) return <Loading type="cylon" />;
  if (error) return <Typography>error {error.message}</Typography>;
  return (
    <Fragment>
      <Container>
        <Header />
        <Main >
          <div>
            {data.search.edges.map(((item: any) => (
              <Typography key={item.node.id} variant="h2">{item.node.nameWithOwner}</Typography>
            )))
            }
            <br />
          </div>
          <br />
          <br />

          <User login={data.search.edges[0].node.name} />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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




