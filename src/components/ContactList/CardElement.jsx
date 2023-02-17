import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../features/contact/contactOperations';
import { selectContactById } from '../../features/contact/contactSelectors';

let CardElement = ({ contactId }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => selectContactById(state, contactId));

  return (
    <li key={post.id} style={{ listStyle: 'none' }}>
      <Card sx={{ minWidth: 275 }} style={{ marginTop: '30px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.success" gutterBottom>
            Name: {post.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Phone: {post.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip
            label="Delete User"
            onDelete={() =>
              dispatch(
                apiRequest({
                  url: `/contact/${post.id}`,
                  method: 'delete',
                  name: 'delete',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
              )
            }
            deleteIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
          />
        </CardActions>
      </Card>
    </li>
  );
};

CardElement = React.memo(CardElement);
export default CardElement;
