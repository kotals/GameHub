import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Modaly from '../Modal/Modal'
import './GameFromMenu.css'
const GameFromMenu = () => {
  const { id } = useParams()
  const [game, setGame] = useState({})
  const [trailer, setTrailer] = useState({})

  useEffect(() => {
    (async () => {
      // setLoading(true)
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=e930d30eb04b4962b85aa272f2925b23`)
      const serverResponse = await response.json()
      console.log('GAAAMMEEEE', serverResponse);
      setGame(serverResponse)
      // setLoading(false)
    })()
  }, [])


  useEffect(() => {
    (async () => {
      // setLoading(true)
      const response = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=e930d30eb04b4962b85aa272f2925b23`)
      const serverResponse = await response.json()
      console.log('trailer', serverResponse);
      setTrailer(serverResponse)
      // setLoading(false)
    })()
  }, [game])

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='container-game' >
        <img src={game.background_image}  className='imgg' alt="" />
        <div className='content-game'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ margin: '0 25px' }}>
              <h1>{game.name} <span><img width='26px' src='https://e7.pngegg.com/pngimages/641/241/png-clipart-gold-sticker-star-star-angle-triangle.png' alt="" /></span></h1>
              <p>Платформы:{game.platforms?.map(el => <span> /{el.platform.name}</span>)}</p>
              <p>Дата релиза: {game.released}</p>
              <p>Жанр: {game.genres?.map(el => <span> /{el.name}</span>)}</p>
              {/* <p>Разработчик: {game?.developers[0]?.name}</p> */}
              {/* <p>Издатель/дистрибьютор: {game?.publishers?[0]?.name}</p> */}
              <p>Сайт: <a href={game.website}>{game.website}</a></p>
              <p></p>
              <p></p>
              <p></p>
              <p>описание :{game.description_raw}</p>

              {
                trailer.results?.length
                  ?
                  trailer.results?.map(el => <> <button type="button" onClick={handleOpen}>trailer</button>  <Modaly trailer={el} open={open} handleClose={handleClose} /> </>)
                  // <a href={el.data.max}><button type="button" onClick={handleOpen}>trailer</button></a>
                  :
                  ''
              }
            </div>
            <div></div>
          </div>
        </div>

      </div>



    </>
  )
}

export default GameFromMenu

// Платформы: 
// Дата релиза: 2021 год
// Жанр: FPS / тактика
// Разработчик: Ubisoft Montreal
// Издатель/дистрибьютор: Ubisoft Entertainment
// Игра является частью серии: Rainbow Six
// Сайт: перейти на сайт игры


// https://api.rawg.io/api/games/1488/movies?key=e930d30eb04b4962b85aa272f2925b23


