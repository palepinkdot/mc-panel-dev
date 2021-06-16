import { useRouter } from "next/router";
import { NavBar } from "../components/NavBar";
import { useMeQuery } from "../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index: React.FC<{}> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  const router = useRouter();

  if (fetching) {
    // data is loading
  } else if (!data?.me) {
    console.log("Not logged in... reidrecting");
    router.push("/login"); // user not logged in
  } else {
    return (
      <>
        <NavBar />
      </> // user is logged in
    );
  }

  return null;
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
