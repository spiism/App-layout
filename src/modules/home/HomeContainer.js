// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeView from './HomeView';
import { setRating } from './HomeState';

type Props = {
  navigation: any,
  rating: number,
  setRating: Function
};

class HomeContainer extends Component<Props> {
  onStarRatingPress = rating => {
    this.props.setRating(rating);
  };

  onSearchTextBoxFocus = () => {
    this.props.navigation.navigate('Search');
  };

  render() {
    return (
      <HomeView
        {...this.props}
        onStarRatingPress={this.onStarRatingPress}
        onSearchTextBoxFocus={this.onSearchTextBoxFocus}
      />
    );
  }
}

// Map actions and state to props
const mapActions = dispatch => ({
  setRating: rating => dispatch(setRating(rating))
});

const mapState = state => ({
  rating: state.home.rating
});
export default connect(
  mapState,
  mapActions
)(HomeContainer);
