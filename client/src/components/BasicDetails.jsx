import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.css';

const BasicDetails = (({ type, vicinity, priceLevel }) => (
  <div id="overview-basic-details" className={styles.overviewBasicDetails}>
    <div className={styles.overviewBasicDetailsSpecific}>{type}
      <span className={styles.overviewMiddot}>·</span>
    </div>
    <div className={styles.overviewBasicDetailsSpecific}>{vicinity}
      <span className={styles.overviewMiddot}>·</span>
    </div>
    <div className={styles.overviewBasicDetailsSpecific}>{priceLevel}</div>
  </div>
));


BasicDetails.propTypes = {
  type: PropTypes.string.isRequired,
  vicinity: PropTypes.string.isRequired,
  priceLevel: PropTypes.string.isRequired,
};

export default BasicDetails;
