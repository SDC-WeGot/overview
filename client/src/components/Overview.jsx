import React from 'react';
import PropTypes from 'prop-types';
import BasicDetails from './BasicDetails';
import DividerLine from './WeGotDividerLine';
import WeGotReview from './WeGotReview';
import LongDescription from './LongDescription';

class Overview extends React.Component {
  constructor(props) {
    console.log(`props: ${JSON.stringify(props)}`);
    super(props);
  }

  render() {
    // if (this.state.renderBool) {
    let priceLevelInDollars = '';
    const priceLevel = this.props.priceLevel || 1;
    for (let i = 0; i < priceLevel; i += 1) {
      priceLevelInDollars += '$';
    }
    return (
      <div id="overview-wrapper">
        <div id="overview-restaurant-title">{this.props.name.toUpperCase()}</div>
        <div id="overview-restaurant-tagline">{this.props.tagline}</div>
        <BasicDetails
          type={this.props.type}
          vicinity={this.props.vicinity}
          priceLevel={priceLevelInDollars}
        />
        <DividerLine />
        <div className="overview-wegot-review-title">THE WEGOT REVIEW</div>
        <WeGotReview
          food={this.props.zagatFood}
          decor={this.props.zagatDecor}
          service={this.props.zagatService}
        />
        <LongDescription
          description={this.props.longDescription}
        />
      </div>
    );
  }
  //   return <div>Loading Restaurant Info...</div>;
  // }
}

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
