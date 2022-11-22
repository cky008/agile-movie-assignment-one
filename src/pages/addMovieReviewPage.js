import React, { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
const PageTemplate = lazy(() => import("../components/templateMoviePage"));
const ReviewForm = lazy(() => import("../components/reviewForm"));
const Spinner = lazy(() => import("../components/spinner"));

const WriteReviewPage = (props) => {
  const location = useLocation();
  const movieId = location.state.movieId;

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Suspense fallback={<h1>Loading page</h1>}>
      {
        <PageTemplate movie={movie}>
          <Suspense fallback={<h1>Loading page</h1>}>
            {<ReviewForm movie={movie} />}
          </Suspense>
        </PageTemplate>
      }
    </Suspense>

  );
};

export default WriteReviewPage;