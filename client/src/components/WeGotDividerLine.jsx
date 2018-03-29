import React from 'react';
import styles from '../style.css';

const DividerLine = () => (
  <div id="overview-divider-line" className={styles.overviewDividerLine}>
    <hr id="overview-hline" className={styles.overviewHline} />
    <img id="overview-logo" className={styles.overviewLogo} src="http://res.cloudinary.com/madlicorice/image/upload/c_scale,q_100,w_46/v1520407902/WeGot_small_logo_recolored.png" alt="wegot-logo" />
  </div>
);


export default DividerLine;
