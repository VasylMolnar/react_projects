import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { useFetch } from '../hooks/useFetch';
import { Loading, Report } from 'notiflix/build/notiflix-loading-aio';
import AspectRatio from '@mui/joy/AspectRatio';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movies, isLoading, fetchError } = useFetch(`films?imdbID=${movieId}`);

  return (
    <div style={{ margin: '7rem 0px' }}>
      {isLoading && Loading.circle('Loading...')}
      {fetchError &&
        (Report.failure('Error', `${fetchError}`), Loading.remove())}
      {!isLoading &&
        !fetchError &&
        (Loading.remove(),
        movies.map(movie => (
          <div key={movie.id}>
            <Typography variant="h2" component="h2">
              {movie.Title}
            </Typography>
            <Typography variant="p" component="p">
              {movie.Plot}
            </Typography>
            <Typography variant="h6" component="h2">
              It is a long established fact that a reader wil be distracted by
              the readable content of a page when looking at its layout the
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution letters.
            </Typography>
            <br />
            <Typography variant="h6" component="h2">
              Awards: {movie.Awards}
              <br />
              Writer: {movie.Writer}
              <br />
              Year: {movie.Year}
            </Typography>
            <br />
            Rating: {movie.imdbRating}
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <div
              className="container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '100px 0px',
              }}
            >
              {movie.Images.map(el => (
                <AspectRatio
                  key={el.id}
                  className="AspectRatio"
                  ratio="2"
                  style={{
                    width: '400px',
                    height: 'auto',
                    borderRadius: '5px',
                    margin: '10px',
                    cursor: 'pointer',
                    border: '1px solid white',
                    objectFit: 'cover',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                    srcSet={el}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              ))}
            </div>
          </div>
        )))}
    </div>
  );
};

export default MovieDetailsPage;
