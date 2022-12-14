import React, { useState, lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const FilterCard = lazy(() => import("../filterMoviesCard"));
const Header = lazy(() => import("../headerMovieList"));
const MovieList = lazy(() => import("../movieList"));

function MovieListPageTemplate({ movies, title, action, page, total_pages, pagination }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [languageFilter, setLanguageFilter] = useState("All");
  const genreId = Number(genreFilter);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const languages = ["All"];
  movies.map((l) => {
  if(!languages.includes(l.original_language)){
      languages.push(l.original_language)
    }
    return undefined;
  })

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return languageFilter === "All" ? true : m.original_language === languageFilter;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "language") setLanguageFilter(value);
    else setGenreFilter(value);
  };

  const moviesSlicer = (moviesList, size) => {
    var moviesSlice = [];
    for (var i = 0; i < moviesList.length; i = i + size) {
      moviesSlice.push(moviesList.slice(i, i + size));
    }
    return moviesSlice;
  }

  let movieSlice = isMobile ? moviesSlicer(displayedMovies, 5) : moviesSlicer(displayedMovies, 11);

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Suspense fallback={<h1>Building Header</h1>}>
          {<Header title={title} />}
        </Suspense>
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Suspense fallback={<h1>Building FilterCard</h1>}>
          {
          <FilterCard
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
          languageFilter={languageFilter}
          languages={languages}
        />
          }
        </Suspense>
        </Grid>
        <Suspense fallback={<h1>Building MovieList</h1>}>
        {(page === "/movies/favorites") ? (
          <MovieList action={action} movies={movieSlice[pagination-1]}></MovieList>
        ) : (
          <MovieList action={action} movies={displayedMovies}></MovieList>
        )}
        </Suspense>
      </Grid>
      {(page === "/movies/favorites") ? (
        <Pagination count={movieSlice.length} color="primary" variant="outlined" shape="rounded" size="large" showFirstButton showLastButton page={parseInt(pagination)} sx={{ justifyContent: 'center', margin: 'auto', marginTop: '20px'}} 
          renderItem={(item) => (
            <PaginationItem component={Link} to={`${page}/page${item.page}`} {...item}/>
          )}
        />
      ) : (
        <Pagination count={total_pages > 500 ? 500 : total_pages} color="primary" variant="outlined" shape="rounded" size="large" showFirstButton showLastButton page={parseInt(pagination)} sx={{ justifyContent: 'center', margin: 'auto', marginTop: '20px'}}
          renderItem={(item) => (
            <PaginationItem component={Link} to={`${page}/page${item.page}`} {...item}/>
          )}
        />
      )}
    </Grid>
  );
}
export default MovieListPageTemplate;