import { InputBase } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkAllGames, thunkCurrentGames } from '../../redux/actions/loaderAction'
import GameList from '../GameList/GameList'
import './Main.css'
import '../Header/Header.styles'
import useStyles from '../Header/Header.styles'
import { Route, Link, Switch, useHistory } from 'react-router-dom'
import GameFromSearch from '../GameFromSearch/GameFromSearch'
import GameFromMenu from '../GameFromMenu/GameFromMenu'





const Main = () => {

  const [input, setInput] = useState('')
  const currentGame = useSelector(state => state)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const classes = useStyles();
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()
    if (input !== '') {
      dispatch(thunkCurrentGames(input.replace(' ', '-')))
      history.push(`/search/${input}`)
      setInput('')
    }
  }

  useEffect(() => {
    setLoading(true)
    dispatch(thunkAllGames(page))
    setLoading(false)
  }, [page])

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <div>
      </div>
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <form style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }} onSubmit={submitHandler} >
          <div className={classes.search}>
            <InputBase value={input} onChange={inputHandler}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <button onClick={submitHandler}>OK</button>
        </form>
        <hr />

        {loading ? <div className='loading'>
          <p>l</p>
          <p>o</p>
          <p>a</p>
          <p>d</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div> :
          ''
        }

        <Switch>
          <Route exact path='/'>
            <GameList setPage={setPage} />
          </Route>
          <Route exact path='/search/:currentGam' >
            <GameFromSearch />
          </Route>
          <Route exact path='/:id' >
            <GameFromMenu />
          </Route>
        </Switch>



      </div>
    </>
  )
}

export default Main

