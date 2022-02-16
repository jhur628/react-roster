export default function FavoritesList({favorites}) {
    return (
        <ol>
            {favorites.map((favorite, i) => <li key={i}>{favorite}</li>)}
        </ol>
    )
}