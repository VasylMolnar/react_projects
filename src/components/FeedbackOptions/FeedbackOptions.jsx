import React from 'react';
import { PropTypes } from 'prop-types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const FeedbackOptions = ({ feedbacks, setFeedback }) => {
  return (
    <Stack spacing={2} direction="row">
      {Object.keys(feedbacks).map(key => (
        <li key={key} style={{ listStyleType: 'none' }}>
          <Button
            variant="contained"
            type="button"
            color="primary"
            onClick={() =>
              setFeedback({ ...feedbacks, [key]: (feedbacks[key] += 1) })
            }
          >
            {key}
          </Button>
        </li>
      ))}
    </Stack>
  );
};

FeedbackOptions.prototype = {
  feedbacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default FeedbackOptions;
