import React, { lazy, Suspense } from "react";
import { useParams } from 'react-router-dom';
import { getMovie } from '../api/tmdb-api'
import { getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
const MovieDetails = lazy(() => import("../components/movieDetails/"));
const PageTemplate = lazy(() => import("../components/templateMoviePage"));
const Spinner = lazy(() => import("../components/spinner"));


const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const {data: casts, error2, isLoading2, isError2 } = useQuery(
    ["casts", { id: id }],
    getMovieCredits
  );
  
  if (isLoading) {
    return    <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading2) {
    return    <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }
  if (isError2) {
    return <h1>{error2.message}</h1>
  }

  return (
    <>
      {movie ? (
        <>
        <Suspense fallback={<h1>Loading page</h1>}>
          {<PageTemplate movie={movie}>
            <Suspense fallback={<h1>Loading page</h1>}>
              {<MovieDetails movie={movie} casts={casts}/> }
            </Suspense>
          </PageTemplate>}
        </Suspense>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;