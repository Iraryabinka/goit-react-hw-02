import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleNext, handlePrev }) => (
  <section className={styles.controls}>
    <button type="button" className={styles.button} onClick={handlePrev}>
      Назад
    </button>
    <button type="button" className={styles.button} onClick={handleNext}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Controls;
