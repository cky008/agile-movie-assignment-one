import React, { lazy, Suspense } from "react";
import Typography from "@mui/material/Typography";
const Spinner = lazy(() => import("../spinner"));
const PersonCredits = lazy(() => import("../personCredits"));

const PersonDetails = ({ person }) => {

  return (
    <>
      <Typography variant="h3" >
        {person.name}
      </Typography>
      <Typography variant="h5" sx={{marginTop: "23px"}}>
        Biography
      </Typography>
      <Typography variant="body1"  sx={{ color: "grey", marginTop: "10px" }}>
        {person.biography}
      </Typography>
      <Suspense fallback={<h1>Building list</h1>}>
        {<PersonCredits person={person}/>}
      </Suspense>
    </>
  );
};
export default PersonDetails;