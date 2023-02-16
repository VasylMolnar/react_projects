import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../features/contact/contactSlice';

const ContactList = ({ sortList }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {sortList.map(el => (
        <li key={el.id} style={{ listStyle: 'none' }}>
          <Card sx={{ minWidth: 275 }} style={{ marginTop: '30px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 25 }}
                color="text.success"
                gutterBottom
              >
                Name: {el.name}
              </Typography>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Phone: {el.phone}
              </Typography>
            </CardContent>
            <CardActions>
              <Chip
                label="Delete User"
                onDelete={() => dispatch(deleteContact(el))}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                color="error"
              />
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
