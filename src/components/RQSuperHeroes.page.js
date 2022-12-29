import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSSuperHeroesPage = () => {
  const [polling, setPolling] = useState(3000);

  const onSuccess = (data) => {
    if (data.data.length === 4) {
      setPolling(false);
    }
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    setPolling(false);
    console.log("Perform side effect after encountering error", error);
  };

  const { isError, data, refetch, isLoading, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000,
      // staleTime: 1000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: polling,
      // refetchIntervalInBackground: true,
      // enabled: false,
      onError,
      onSuccess,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => (
        <div key={data.name}>{hero.name}</div>
      ))}
    </>
  );
};
