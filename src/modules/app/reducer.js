import { handleActions } from 'redux-actions'
import { POST_TYPE_NAME } from './constants'

const initialState = {
  initialStatePost: "Moin Moin"
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({
  [POST_TYPE_NAME]: (state, action) => {
    const { idGen } = state
    const newId = idGen + 1

    //this reducer basically generate a new id for new counter and
    //assign value 0 to that id.

    return {
      initialStatePost: action.payload.payLoadParameter,
    }
  },
}, initialState)
