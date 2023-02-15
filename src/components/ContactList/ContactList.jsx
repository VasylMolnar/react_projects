import { useState, React } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { BiPlusMedical } from 'react-icons/bi';
import Modal from '../Modal/Modal';

const ContactList = ({ items, setPage, totalHits }) => {
  const [visible, setVisible] = useState(false);
  const [previewURL, setPreviewURL] = useState();
  const [title, setTitle] = useState('');

  const toggleModal = item => {
    setTitle(item.tags);
    setPreviewURL(item.previewURL);
    setVisible(true);
  };

  return (
    <>
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
          <ImageListItem key={item.id} onClick={() => toggleModal(item)}>
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

        {items.length < totalHits && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setPage(prev => prev + 1)}
          >
            Load more <BiPlusMedical />
          </button>
        )}
      </ImageList>

      <Modal
        visible={visible}
        setVisible={setVisible}
        previewURL={previewURL}
        title={title}
      />
    </>
  );
};

export default ContactList;
