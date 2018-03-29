import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.css';

const WeGotReview = (({ food, decor, service }) => (
  <div id="overview-wegot-review" className={styles.overviewWegotReview}>
    <div className={styles.overviewWegotDetailsBox}>
      <div className={styles.overviewWegotRatingDetails}>{food}</div>
      <span className={styles.overviewWegotDetailsSubtitle}>FOOD</span>
    </div>
    <div className={`${styles.overviewWegotDetailsBox} ${styles.overviewWegotMidbox}`}>
      <div className={styles.overviewWegotRatingDetails}>{decor}</div>
      <span className={styles.overviewWegotDetailsSubtitle}>DECOR</span>
    </div>
    <div className={styles.overviewWegotDetailsBox}>
      <div className={styles.overviewWegotRatingDetails}>{service}</div>
      <span className={styles.overviewWegotDetailsSubtitle}>SERVICE</span>
    </div>
  </div>
));


WeGotReview.propTypes = {
  food: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  decor: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  service: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
WeGotReview.defaultProps = {
  food: PropTypes.string.isRequired,
  decor: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default WeGotReview;
