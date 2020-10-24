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
import { Container, Typography } from "../../components/themed";

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

const GET_USER = gql`
  query Test($login:String!){
    user(login:$login){
      location
    }
  }
`;

function User({ login }: { login: string }) {
  const { loading, error, data } = useQuery(GET_USER, { variables: { login } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;

  return (
    <div>
      {data.user.location}
    </div>
  );
}

const Search: React.FC = () => {
  const history = useHistory();

  const { loading, error, data } = useQuery(VIEW_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;
  return (
    <Fragment>
      <Container>
        <Header />
        <Main >
          <div>
            <Typography variant="h2">{data.viewer.login}</Typography>
            <br />
            <Typography variant="h4">{data.viewer.id}</Typography>
            <br />
            <Typography variant="h5">{data.viewer.email}</Typography>
          </div>
          <br />
          <br />

          <User login={data.viewer.login} />

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




