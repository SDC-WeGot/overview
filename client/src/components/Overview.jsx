import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BasicDetails from './BasicDetails';
import DividerLine from './WeGotDividerLine';
import WeGotReview from './WeGotReview';
import LongDescription from './LongDescription';

class Overview extends React.Component {
  constructor(props) {
    console.log(`props: ${JSON.stringify(props)}`);
    super(props);
    // this.state = {
    //   renderBool: false,
    //   restaurantTitle: 'Title Placeholder',
    //   restaurantTagline: 'Tagline Placeholder',
    //   restaurantType: 'Restaurant',
    //   restaurantVicinity: 'Vicinity Placeholder',
    //   restaurantPriceLevel: 'Price Level Placeholder',
    //   weGotFoodRating: '3.3',
    //   weGotDecorRating: '3.3',
    //   weGotServiceRating: '3.3',
    //   restaurantDescription: 'Description Placeholder',
    // };
    let priceLevelInDollars = '';
    const priceLevel = this.props.priceLevel || 1;
    for (let i = 0; i < priceLevel; i += 1) {
      priceLevelInDollars += '$';
    }
    this.props.priceLevel = priceLevelInDollars;
  }

  // componentDidMount() {
  //   this.fetchRestaurantInfo();
  // }

  // componentWillMount() {
  //   console.log('component will mount');
  //   (async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3002/api/restaurants/${this.props.itemid}/overview`);
  //       await this.handleRestaurantChange(response.data);
  //       console.log(`state prior to mount: ${JSON.stringify(this.state)}`);
  //     } catch (e) {
  //       //  ...handle the error...
  //       console.log(`error in componentWillMount: ${e}`);
  //     }
  //   })();
  // }

  // fetchRestaurantInfo() {
  //   // const id = window.location.href.split('/')[4];
  //   axios.get(`http://localhost:3002/api/restaurants/${this.props.itemid}/overview`)
  //     .then((response) => {
  //       this.handleRestaurantChange(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // handleRestaurantChange(restaurantDetails) {
  //   let priceLevelInDollars = '';
  //   const priceLevel = restaurantDetails.priceLevel || 1;
  //   for (let i = 0; i < priceLevel; i += 1) {
  //     priceLevelInDollars += '$';
  //   }
  //   return new Promise((resolve) => {
  //     this.setState({
  //       renderBool: true,
  //       restaurantTitle: restaurantDetails.name.toUpperCase(),
  //       restaurantTagline: restaurantDetails.tagline,
  //       restaurantVicinity: restaurantDetails.vicinity,
  //       restaurantPriceLevel: priceLevelInDollars,
  //       weGotFoodRating: restaurantDetails.zagatFood,
  //       weGotDecorRating: restaurantDetails.zagatDecor,
  //       weGotServiceRating: restaurantDetails.zagatService,
  //       restaurantDescription: restaurantDetails.longDescription,
  //     }, resolve);
  //   });
  // }

  render() {
    // if (this.state.renderBool) {
    return (
      <div id="overview-wrapper">
        <div id="overview-restaurant-title">{this.props.name.toUpperCase()}</div>
        <div id="overview-restaurant-tagline">{this.props.tagline}</div>
        <BasicDetails
          type={this.props.type}
          vicinity={this.props.vicinity}
          priceLevel={this.props.priceLevel}
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
