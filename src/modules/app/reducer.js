import { handleActions } from 'redux-actions'
import { POST_TYPE_NAME } from './constants'

const initialState = {
  initialStatePost : "moin"
}

export default handleActions({
    [POST_TYPE_NAME] : (state,action) => {
      return {
        initialStatePost : action.payload.payLoadParameter
      }
    }
},initialState)
