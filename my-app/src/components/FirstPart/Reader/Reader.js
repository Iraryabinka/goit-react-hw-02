import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

export default class Reader extends Component {
  static defaultProps = {};

  static propTypes = {
    items: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    currentIndex: 0,
  };

  handlePrev = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className={styles.reader}>
        <Publication item={items[currentIndex]} />
        <Counter currentPage={currentIndex} totalPages={items.length} />
        <Controls handleNext={this.handleNext} handlePrev={this.handlePrev} />
      </div>
    );
  }
}
