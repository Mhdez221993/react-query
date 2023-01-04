import { Link } from "react-router-dom";
import { useAddSuperHeroData } from "./../hooks/useSuperHeroData";
import { useState } from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroesData";

export const RQSSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
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

  const { mutate: addHero } = useAddSuperHeroData();

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    addHero({ name, alterEgo });
  };

  return (
    <>
      <h2>RQ Super Heroes</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>

      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}

      {/* {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </>
  );
};
