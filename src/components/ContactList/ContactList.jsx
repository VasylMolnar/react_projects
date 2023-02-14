import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const ContactList = ({ items, setPage }) => {
  return (
    <ImageList
      cols={4}
      gap={10}
      style={{
        padding: '10px',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        position: 'absolute',
        zIndex: -1,
      }}
    >
      {items.map(item => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.previewURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.tags}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.tags}
            subtitle={item.user}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.tags}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}

      <button
        type="button"
        class="btn btn-primary"
        onClick={() => setPage(prev => prev + 1)}
      >
        Primary
      </button>
    </ImageList>
  );
};

export default ContactList;
