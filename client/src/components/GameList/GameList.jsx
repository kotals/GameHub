
import { useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard'



const GameList = ({ setPage }) => {
  const games = useSelector(state=>state.games.allgames)
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
        {games?.results?.map((el, inx) => <span key={inx} style={{ margin: '0 15px', cursor: 'pointer' }} onClick={() => setPage(inx+1)}>{inx + 1}</span>)}
      </div>

      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', margin: '0 auto', justifyContent: 'center' }}>

        {/* <div style={{ margin: '0 15px' , height:'100vh', position: 'sticky' }}>
          <h3>Тип платформы</h3>
          <div>
          <input type="checkbox" name='platform' /> Windows
          </div>
          <div>
          <input type="checkbox" name='platform' /> Playstation
          </div>
          <div>
          <input type="checkbox" name='platform' /> Xbox
          </div>
          <div>
          <input type="checkbox" name='platform' />
          </div>
        </div> */}

        {
          games?.results?.length
            ?
            games?.results?.map(el => <GameCard key={el.id} info={el} />)
            :
            ''
        }


      </div>
    </>
  )
}

export default GameList

