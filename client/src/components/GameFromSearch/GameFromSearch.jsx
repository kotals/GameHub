
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const GameFromSearch = () => {
  const currentGame = useSelector(state => state.games.currentgame)
  const [loading, setLoading] = useState(false)

  console.log(currentGame, 'currentGame');


  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <div className='container-game' >
        <img src={currentGame.background_image} className='imgg' alt="" />
        <div className='content-game'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ margin: '0 25px' }}>
              <h1>{currentGame.name}</h1>
              <p>Платформы:{currentGame.platforms?.map((el,indx) => <span key={indx} > /{el.platform.name}</span>)}</p>
              <p>Дата релиза: {currentGame.released}</p>
              <p>Жанр: {currentGame.genres?.map((el,indx)=> <span key={indx} >  /{el.name}</span>)}</p>
              {/* <p>Разработчик: {game?.developers[0]?.name}</p> */}
              {/* <p>Издатель/дистрибьютор: {game?.publishers?[0]?.name}</p> */}
              <p>Сайт: <a href={currentGame.website}>{currentGame.website}</a></p>
              <p></p>
              <p></p>
              <p></p>
              <p>описание :{currentGame.description_raw}</p>

              {/* {
                trailer.results?.length
                  ?
                  trailer.results?.map(el => <> <button type="button" onClick={handleOpen}>trailer</button>  <Modaly trailer={el} open={open} handleClose={handleClose} /> </>)
                  // <a href={el.data.max}><button type="button" onClick={handleOpen}>trailer</button></a>
                  :
                  ''
              } */}
            </div>
            <div></div>
          </div>
        </div>

      </div>

    </>
  )
}

export default GameFromSearch

