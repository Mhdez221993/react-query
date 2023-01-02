import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const fetchColors = (pageNumber) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Paginated queries</h2>
      {data.data.map((color) => (
        <div key={color.id}>{color.label}</div>
      ))}

      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber === 1}
      >
        prev
      </button>

      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber === 4}
      >
        next
      </button>

      {isLoading && "Loading..."}
    </>
  );
};
