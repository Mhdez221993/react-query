import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = () => axios.get("http://localhost:4000/superheroes");
const fetchFriends = () => axios.get("http://localhost:4000/friends");

export const ParallelQueries = () => {
  const { data: heroes } = useQuery("super-heroes", fetchHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <>
      <div>ParallelQueriesPage</div>
    </>
  );
};
