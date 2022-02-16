import './PlayerList/PlayerList.css'
import Player from './Player'

export default function PlayerList ({data, addFavorite}) {
    console.log('data', data)
    // const players = data.map(player => { 
    //     return<p>{player.firstName} {player.lastName}</p>
    // })
    return (
        <div class="row">
            {data.map((player, i) => <Player key={i} addFavorite={addFavorite} athlete={player} />)}
        </div>
    )
    /*
    Take the array of players
    Iterate over them
    Return a Player component for each player object
    */
}