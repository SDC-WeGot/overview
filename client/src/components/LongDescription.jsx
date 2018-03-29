import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.css';

const LongDescription = (({ description }) => (
  <div id="overview-long-description" className={styles.overviewLongDescription}>
    {description}
  </div>
));


LongDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LongDescription;
