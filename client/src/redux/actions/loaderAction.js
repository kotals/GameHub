import { ALL_GAMES, CURRENT_GAME } from "../types/types";




export const thunkAllGames = (text) => async (dispatch, getState) => {

  const response = await fetch(`https://api.rawg.io/api/games?key=e930d30eb04b4962b85aa272f2925b23&page=${text}`)
  const serverResponse = await response.json()
  dispatch(AllGames(serverResponse))
}

export const AllGames = (text) => ({
  type: ALL_GAMES,
  payload: text
})


export const thunkCurrentGames = (text) => async (dispatch, getState) => {
  console.log(text);
  const response = await fetch(`https://api.rawg.io/api/games/${text}?key=e930d30eb04b4962b85aa272f2925b23`)
  const serverResponse = await response.json()
  
  dispatch(CurrentGames(serverResponse))
}

export const CurrentGames = (text) => ({
  type: CURRENT_GAME,
  payload: text
})
