import React, { lazy, Suspense } from "react";
import { getUpComingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
const PageTemplate = lazy(() => import("../components/templateMovieListPage"));
const Spinner = lazy(() => import("../components/spinner"));
const AddToWatchIcon = lazy(() => import("../components/cardIcons/addToWatch"));

const UpcomingMoviesPage = (props) => {

  const { pagination } = useParams();

  const {  data, error, isLoading, isError }  = useQuery(["discoverUpcoming", pagination], getUpComingMovies)

  if (isLoading) {
    return    <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

    // // Redundant, but necessary to avoid app crashing.
    // const toWatch = movies.filter(m => m.toWatch)
    // localStorage.setItem('toWatch', JSON.stringify(toWatch))
  

  return (
    <Suspense fallback={<h1>Loading PageTemplate</h1>}>
      {
        <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchIcon movie={movie} />
        }}
        page="/movies/upcoming"
        pagination={pagination}
        total_pages={data.total_pages}
      />
      }
    </Suspense>
  );
};

export default UpcomingMoviesPage;