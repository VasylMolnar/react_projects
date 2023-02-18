import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoginUserQuery } from '../features/auth/authSlice';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useLogoutUser from '../hooks/useLogoutUser';

const UserPage = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError, error } = useLoginUserQuery(id); // this we use if we have server (in here we don't have')
  //const data = useSelector(state => selectUserById(state, id));//this we use if we safe data to postsAdapter (authSlice.js and useLoginUser.js)

  const { logout } = useLogoutUser();

  if (!data) {
    return (
      <div
        style={{
          color: 'red',
          margin: '50px auto',
          maxWidth: '500px',
        }}
      >
        <h1>User Not Found</h1>
        <p>Please login.</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>{error}</h1>}

      {isSuccess && (
        <div style={{ marginBlock: '100px' }}>
          <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => logout()}>
                Log Out
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
};

export default UserPage;
