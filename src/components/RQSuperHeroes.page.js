import { useState } from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSSuperHeroesPage = () => {
  const [polling, setPolling] = useState(3000);

  const onSuccess = (data) => {
    if (data.length === 4) {
      setPolling(false);
    }
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    setPolling(false);
    console.log("Perform side effect after encountering error", error);
  };

  const { isError, data, refetch, isLoading, error, isFetching } =
    useSuperHeroData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes</h2>
      {/* <button onClick={refetch}>Fetch Heroes</button> */}
      {/* {data?.data.map((hero) => (
        <div key={data.name}>{hero.name}</div>
      ))} */}

      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};
