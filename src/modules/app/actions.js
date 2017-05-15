import { POST_TYPE_NAME } from './constants'

export const postActionName = (payLoadParameter) => {
  return {
    type : POST_TYPE_NAME,
    payload : {
      payLoadParameter
    }
  }
}
