// TODO: add and export your own actions, (i.e. API calls)
export const FETCH_CARS = 'FETCH_CARS';
export const REMOVE_CAR = 'REMOVE_CAR';
export const ADD_CAR = 'ADD_CAR';

const BASE_URL = `https://wagon-garage-api.herokuapp.com`;

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then((res) => res.json());

  return {
    type: FETCH_CARS,
    payload: promise,
  };
}

export function addCar(garage, car) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSONstringify(car),
  }).then((r) => r.json());

  return {
    type: ADD_CAR,
    payload: promise,
  };
}

export function removeCar(history, car) {
  //TODO remove car by id

  return {
    type: REMOVE_CAR,
    payload: car,
  };
}
