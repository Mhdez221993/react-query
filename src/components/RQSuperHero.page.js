import { useParams } from "react-router-dom";
import { useSuperHeroData } from "./../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { data, isLoading, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Super Hero Page</h2>
      <div>
        {data?.data.name} - {data?.data.alterEgo}
      </div>
    </>
  );
};
