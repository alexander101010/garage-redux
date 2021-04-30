import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    // this.props.fetchCars();
  }

  // renderCar = (car) => {};
  render() {
    return (
      <div className='cars-container'>
        {this.props.cars.map((car) => {
          return (
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div className='car-card' key={car.id}>
                <div className='car-details'>
                  <span>
                    {car.brand} - {car.model}
                  </span>
                  <ul>
                    <li>
                      <strong>Owner: </strong>
                      {car.owner}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //TODO
  return {
    cars: state.cars,
    garage: state.garage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
