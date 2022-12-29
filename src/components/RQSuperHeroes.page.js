import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSSuperHeroesPage = () => {
  const { isError, data, isLoading, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes</h2>
      {data?.data.map((hero) => (
        <div key={data.id}>{hero.name}</div>
      ))}
    </>
  );
};
