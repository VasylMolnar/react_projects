import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './index.css';
import { Link } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  const randomNumber = Math.floor(Math.random() * 3);

  return (
    <Grid item xs={2} sm={4} md={2}>
      <Link to={`/movies/${movie.imdbID}`}>
        <Card sx={{ maxWidth: 250 }} className="card">
          <CardMedia
            sx={{ height: 200 }}
            image={movie.Images[randomNumber]}
            title={movie.Title}
          />
          <CardContent style={{ padding: '5px' }}>
            <Typography gutterBottom variant="p" component="p">
              {movie.Title}
            </Typography>
          </CardContent>
          <CardContent style={{ padding: '5px' }}>
            <Typography variant="p" component="p">
              {movie.imdbRating}
            </Typography>
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
            <StarBorderRoundedIcon style={{ color: 'gold' }} />
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default MoviesCard;
