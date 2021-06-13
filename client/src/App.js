import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

const signIn = useSelector(state=>state.signIn)



  return (
    <div className="App">
      <Header />
      {
      signIn
      ?

      <Main/>
      
      :
      'пшел вон'
    }
    </div>
  );
}

export default App;


// 'https://api.rawg.io/api/games/7689?key=e930d30eb04b4962b85aa272f2925b23'


//https://api.rawg.io/api/games?search=wow&key=e930d30eb04b4962b85aa272f2925b23 current game
// https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&key=e930d30eb04b4962b85aa272f2925b23  ожидаемые игры
