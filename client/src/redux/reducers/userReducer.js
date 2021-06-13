
import {SIGN_IN } from "../types/types"


const userReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload
  
    default:
      return state
  }
}

export default userReducer
