import React, { lazy, Suspense } from "react";
import { useParams } from 'react-router-dom';
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
const PersonDetails = lazy(() => import("../components/personDetails"));
const PageTemplate = lazy(() => import("../components/templatePersonPage"));
const Spinner = lazy(() => import("../components/spinner"));

const PersonPage = (props) => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  if (isLoading) {
    return    <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
    <Suspense fallback={<h1>Loading page</h1>}>
    {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </Suspense>
    </>
  );
};

export default PersonPage;