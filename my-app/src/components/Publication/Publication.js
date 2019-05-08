import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ items: { id, title, text } }) => (
  <section className={styles.publication} key={id}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);
Publication.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default Publication;
