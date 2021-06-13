import { ALL_GAMES, CURRENT_GAME } from "../types/types"


const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_GAMES:
      return {
        ...state,
        allgames: action.payload
      }

      case CURRENT_GAME:
      return {
        ...state,
        currentgame: action.payload
      }

    default:
      return state
  }
}

export default gamesReducer
