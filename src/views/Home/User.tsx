import React from "react";
import { loader } from "graphql.macro";
import { useQuery, NetworkStatus } from "@apollo/client";

import { Typography, Loading } from "../../components/themed";
import { ImgLoader } from "../../components";

interface userType {
  username?: string | null
}

const UserQuery = loader("./user.graphql");


function User(props: userType): JSX.Element {
  const { username } = props;

  const { loading, error, data, networkStatus } = useQuery(UserQuery, {
    variables: {
      user: username
    },
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });
  // const handleRefetch = () => {
  //   refetch({ user: "hessamnadr" });
  // };

  if (loading && networkStatus !== NetworkStatus.refetch) {
    return <Loading
      type="spinningBubbles"
      height="40px"
      width=" 40px"
    />;
  }
  if (error) return <Typography>{error.message}</Typography>;
  if (!data) return <Typography>"It's empty"</Typography>;

  if (networkStatus === NetworkStatus.refetch) return <Typography>Refetching!</Typography>;
  
  return (
    <div>
      <ImgLoader
        alt="Travis Howard"
        height={40}
        width={40}
        url={data.user.avatarUrl}
      />
      {/* <button onClick={handleRefetch} >refetch</button> */}
    </div>
  );
}


export default User;
