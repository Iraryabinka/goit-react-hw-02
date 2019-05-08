import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  state = {};

  static propTypes = {
    items: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className={styles.reader}>
        <Publication />
        <p className={styles.counter}>3/10</p>

        <section className={styles.controls}>
          <button type="button" className={styles.button}>
            Назад
          </button>
          <button type="button" className={styles.button}>
            Вперед
          </button>
        </section>
      </div>
    );
  }
}
