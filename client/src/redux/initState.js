export const locState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : null


const initState = () => {
  const state = {
    games: {
      allgames: [],
      currentgame:{},
    },
    signIn:false,
    loader:false,
  }
  return locState || state
}

export default initState

