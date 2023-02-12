import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import defaultImage from './defaultImage.png';

const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        boxShadow: '3px 3px 7px 0px rgba(0, 0, 0, 0.75)',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={avatar}
          alt={username}
          style={{
            border: '3px solid #e9eef3',
            borderRadius: '50px',
            width: '100px',
            height: '100px',
            marginLeft: '10px',
            marginTop: '10px',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {username}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {tag}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>

        <CardContent
          style={{
            backgroundColor: 'rgb(213, 213, 222)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Typography gutterBottom variant="p" component="div">
            <Typography gutterBottom variant="p" component="div">
              Followers
            </Typography>
            {followers}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            <Typography gutterBottom variant="p" component="div">
              Views
            </Typography>
            {views}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            <Typography gutterBottom variant="p" component="div">
              Likes
            </Typography>
            {likes}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Profile;
