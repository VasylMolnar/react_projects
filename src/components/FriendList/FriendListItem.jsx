import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginTop: '30px' }}>
      <CardActionArea>
        <CardContent>
          <Typography
            className={isOnline ? css.status__true : css.status__false}
          ></Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={avatar}
          alt={name}
          style={{
            border: '3px solid #e9eef3',
            borderRadius: '10px',
            width: '100px',
            height: '100px',
            marginLeft: '10px',
            marginTop: '10px',
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FriendListItem;
