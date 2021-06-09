import { createStore } from 'redux';

const defaultState = {
  image: {}
}
const ADD_IMAGE = "ADD_IMAGE";

export const addImage = (image) => ({
    type: ADD_IMAGE, 
    image
})

function reducer (state = defaultState, action) {
    switch (action.type) {
      case ADD_IMAGE:
        return {...state, image: action.image};
      default:
        return state;
    }
  }


const store = createStore(reducer)

  export default store;