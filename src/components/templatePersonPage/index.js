import React, { lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
const Spinner = lazy(() => import("../spinner"));
const PersonDetailInfo = lazy(() => import("../personDetailInfo"));

const TemplatePersonPage = ({ person, children }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return    <Suspense fallback={<h1>Loading Componment</h1>}>{<Spinner />}</Suspense>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const image = data.profiles[0] 

  return (
    <>
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
            </ImageList>
          </div>
          <Suspense fallback={<h1>Building PersonDetailInfo</h1>}>
            {<PersonDetailInfo person={person} />}
          </Suspense>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;
