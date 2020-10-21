import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";
import { gql, useQuery } from "@apollo/client";

import { Typography } from "../../components/themed";


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
      <Div>
        <Typography variant="h1">About</Typography>
        <br />
        <br />
        <br />
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
      </Div>
    </Fragment>
  );
};

export default Search;

interface DivProps {

}
const Div = styled((props: DivProps) => {
  const { ...other } = props;
  return (
    <div {...other} />
  );
})`
width:100%;
`;

