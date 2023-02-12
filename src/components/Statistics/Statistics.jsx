import React from 'react';
import css from './Statistics.module.css';
import uploadStats from '../../data/uploadStats.json';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h1>Upload stats</h1>
      <ul className={css.statList}>
        {uploadStats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: randomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
