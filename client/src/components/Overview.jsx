import React from 'react';
import PropTypes from 'prop-types';
import BasicDetails from './BasicDetails';
import DividerLine from './WeGotDividerLine';
import WeGotReview from './WeGotReview';
import LongDescription from './LongDescription';

const Overview = (props) => {
  let priceLevelInDollars = '';
  const priceLevel = props.priceLevel || 1;
  for (let i = 0; i < priceLevel; i += 1) {
    priceLevelInDollars += '$';
  }
  return (
    <div id="overview-wrapper">
      <div id="overview-restaurant-title">{props.name.toUpperCase()}</div>
      <div id="overview-restaurant-tagline">{props.tagline}</div>
      <BasicDetails
        type={props.type}
        vicinity={props.vicinity}
        priceLevel={priceLevelInDollars}
      />
      <DividerLine />
      <div className="overview-wegot-review-title">THE WEGOT REVIEW</div>
      <WeGotReview
        food={props.zagatFood}
        decor={props.zagatDecor}
        service={props.zagatService}
      />
      <LongDescription
        description={props.longDescription}
      />
    </div>
  );
};

Overview.propTypes = {
  _id: PropTypes.string.isRequired,
  restaurant_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  vicinity: PropTypes.string.isRequired,
  priceLevel: PropTypes.string.isRequired,
  zagatFood: PropTypes.string.isRequired,
  zagatDecor: PropTypes.string.isRequired,
  zagatService: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
};

export default Overview;
