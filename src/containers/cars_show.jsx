import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsShow extends Component {
  render() {
    const car = this.props.car;
    if (!car) {
      return <p>Loading 🏎...</p>;
    }
    return (
      <div>
        <div className='car-show'>
          <h3 className='car-show-make'>
            {car.brand} - {car.model}
          </h3>
          <h3 className='car-show-owner'>
            <span>Owner: </span>
            {car.owner}
          </h3>
          <div className='car-show-plate'>{car.plate}</div>
        </div>
        <Link to='/'>Back </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // get car from id in url
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find((car) => car.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
