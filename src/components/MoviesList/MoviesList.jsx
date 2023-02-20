import React from 'react';
import MoviesCard from './MoviesCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const MoviesList = ({ movies }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies.map(movie => (
          <MoviesCard movie={movie} key={movie.imdbID} />
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesList;
