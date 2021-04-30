import { FETCH_CARS, REMOVE_CAR, ADD_CAR } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    // case REMOVE_CAR: {
    // const copiedState = state.slice(0);
    // copiedState.push(action.payload);
    // return copiedState;
    // }
    default:
      return state;
  }
}
