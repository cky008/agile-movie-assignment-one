import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const RegisterPage = lazy(() => import("./pages/registerPage"));
const ResetPage = lazy(() => import("./pages/resetPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const SiteHeader = lazy(() => import("./components/siteHeader"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const HomePage = lazy(() => import("./pages/homePage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upComingMoviesPage"));
const TopRatedPage = lazy(() => import("./pages/topRatedPage"));
const PersonDetailsPage = lazy(() => import("./pages/personDetailsPage"));
const PersonPage = lazy(() => import("./pages/personPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Suspense fallback={<h1>Loading page</h1>}>
          <Routes>
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route exact path="/movies/favorites/page:pagination" element={<FavoriteMoviesPage />} />
            <Route exact path="/movies/upcoming/page:pagination" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/toprated/page:pagination" element={<TopRatedPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/page:pagination" element={<HomePage />} />
            <Route path="/person/page:pagination" element={ <PersonPage/> } />
            <Route path="/person/:id" element={ <PersonDetailsPage/> } />
            <Route path="*" element={ <Navigate to="/page1" /> } />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/reset" element={<ResetPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          </Suspense>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);