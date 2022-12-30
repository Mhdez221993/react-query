import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 1000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: polling,
    // refetchIntervalInBackground: true,
    // enabled: false,
    onError,
    onSuccess,
    select: (data) => {
      const heroNames = data.data.map((hero) => hero.name);
      return heroNames;
    },
  });
};
