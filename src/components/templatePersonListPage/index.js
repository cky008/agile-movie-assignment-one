import React, { lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";
const PersonList = lazy(() => import("../personList"));

function PersonListPageTemplate({ persons }) {

  let displayedPersons = persons

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item container spacing={5}>
        <Suspense fallback={<h1>Building list</h1>}>
          {<PersonList persons={displayedPersons}></PersonList>}
        </Suspense>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;