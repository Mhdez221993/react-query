import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);

export const InfiniteQueriesPages = () => {
  const {
    isLoading,
    data,
    error,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  if (isError) {
    <h2>{error}</h2>;
  }

  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <div key={i}>
              <>
                {group.data.map((color) => (
                  <div key={color.id}>
                    {color.id} {color.label}
                  </div>
                ))}
              </>
            </div>
          );
        })}
      </div>

      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more
      </button>

      <div>{isFetching && !isFetchingNextPage ? "Fetcing..." : null}</div>
    </>
  );
};
