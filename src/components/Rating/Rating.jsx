import { React } from 'react';
import { Typography } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

const Rating = ({ movies }) => {
  return (
    <div style={{ margin: '7rem 0px' }}>
      <Typography variant="h2" component="h2">
        {movies[0].Title}
      </Typography>
      <Typography variant="p" component="p">
        {movies[0].Plot}
      </Typography>
      <Typography variant="h6" component="h2">
        It is a long established fact that a reader wil be distracted by the
        readable content of a page when looking at its layout the point of using
        Lorem Ipsum is that it has a more-or-less normal distribution letters.
      </Typography>
      <br />
      <Typography variant="h6" component="h2">
        Awards: {movies[0].Awards}
        <br />
        Writer: {movies[0].Writer}
        <br />
        Year: {movies[0].Year}
      </Typography>
      <br />
      Rating: {movies[0].imdbRating}
      <StarBorderRoundedIcon style={{ color: 'gold' }} />
      <StarBorderRoundedIcon style={{ color: 'gold' }} />
      <StarBorderRoundedIcon style={{ color: 'gold' }} />
      <StarBorderRoundedIcon style={{ color: 'gold' }} />
    </div>
  );
};

export default Rating;
