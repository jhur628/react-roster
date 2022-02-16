import './App.css';
import PlayerList from './components/PlayerList'
import Welcome from './components/Welcome'
import FavoritesList from './components/FavoritesList'

// import player data
import { playerData } from './data/playerData'
import { useState }  from 'react'

// //playerData.js to be used in exercise

// const alexHobbies = ["dancing", "making YouTube videos", "fishing"];
// const joseHobbies = ["travel", "eating burgers", "skiiing"];
// const justinHobbies = ["hunting wabbits", "Sunshine Kids volunteer", "grilling"];
// const yordanHobbies = []
// const luisHobbies = []

// const playerData = [
//   { id: 1, firstName: "Alex", lastName: "Bregman", hobbies: alexHobbies, jerseyNumber: 2 },
//   { id: 4, firstName: "Yordan", lastName: "Alvarez", hobbies: yordanHobbies, jerseyNumber: 44 },
//   { id: 3, firstName: "Jose", lastName: "Altuve", hobbies: joseHobbies, jerseyNumber: 27 },
//   { id: 5, firstName: "Justin", lastName: "Verlander", hobbies: justinHobbies, jerseyNumber: 35 },
//   { id: 2, firstName: "Luis", lastName: "Garcia", hobbies: luisHobbies, jerseyNumber: 77 },
// ]

// const nameData = playerData.map(player => player.firstName + " " + player.lastName);
// const jerseyData = playerData.map(player => player.jerseyNumber);
// const hobbiesData = playerData.map(player => player.hobbies);

export default function App() {
  const [favorites, setFavorites] = useState([])
  const addFavorite = (name) =>
    !favorites.includes(name) ? setFavorites([...favorites, name]) : null
  const reset = () => setFavorites([]);
  return (
    <div className="App">
      <Welcome />
      <PlayerList addFavorite={addFavorite} data={playerData} />
      {favorites.length
        ? <div>
            <FavoritesList favorites={favorites} />
            <button onClick={reset}>Reset Favorites</button>
          </div>
        : <h3>Add your favorite players.</h3>
      }
    </div>
  );
}

/*
1. Turn Welcome message into a component
2. Display a message related to the time of day in the Welcome component
7AM -12PM Good morning
12:01PM - 5PM Good afternoon
5:01PM - 11PM Good eventin
11PM - 7AM Why you up?
*/