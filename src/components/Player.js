import Hobbies from './Hobbies'

export default function Player ({ athlete, addFavorite }) {
    const { firstName, lastName, jerseyNumber, hobbies } = athlete
    const name = `${firstName} ${lastName}`
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>Jersey Number: {jerseyNumber}</p>
            {/* <ul>Hobbies: {hobbies.map(hobby => <li>{hobby}</li>)}</ul> */}
            { hobbies.length ? <Hobbies fun={hobbies} /> : <p>No hobbies listed.</p> }
            <button onClick={() => addFavorite(name)}>Add to favorite</button>
        </div>
        // <>
        //     {athlete.map((player) => 
        //         <>
        //             <h2>{player.firstName} {player.lastName}</h2>
        //             <p>Jersey Number: {player.jerseyNumber}</p>
        //             <p>Hobbies: {player.hobbies.map(hobby => <p>{hobby}</p>)}</p>
        //         </>
        //     )}
        // </>
    )
}