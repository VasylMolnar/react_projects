import { React, useMemo } from 'react';
import css from './Statistics.module.css';
import Typography from '@mui/material/Typography';

const Statistics = ({ feedbacks }) => {
  const countTotalFeedback = useMemo(() => {
    const { good, neutral, bad } = feedbacks;
    return good + neutral + bad;
  }, [feedbacks]);

  const countPositiveFeedback = useMemo(() => {
    const goodFeedback = feedbacks.good;
    let result = 0;

    if (countTotalFeedback > 0) {
      result = Math.ceil((goodFeedback / countTotalFeedback) * 100);
    }

    return `${result}%`;
  }, [countTotalFeedback, feedbacks]);

  if (countTotalFeedback === 0) {
    return <p>There is no feedback</p>;
  }

  return (
    <section className={css.statistics}>
      <h1 className={css.title}>Statistics</h1>

      <ul style={{ listStyleType: 'none' }}>
        {Object.entries(feedbacks).map(el => (
          <li key={el[0]} style={{ display: 'flex' }}>
            <Typography variant="h5" style={{ textTransform: 'uppercase' }}>
              {el[0]}:
            </Typography>

            <Typography variant="h5" color="primary">
              {el[1]}
            </Typography>
          </li>
        ))}

        <li>
          <Typography variant="h5" color="success">
            Total: {countTotalFeedback}
          </Typography>
        </li>

        <li>
          <Typography variant="h5" color="success">
            Positive Feedback:{countPositiveFeedback}
          </Typography>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
