import './Welcome/Welcome.css'

export default function Welcome () {
    const current = new Date().getHours();
    const greeting = current < 7 ? 'Why you up?'
                    : current < 12 ? 'Good morning!'
                    : current < 17 ? 'Good Afternoon!'
                    : 'Good Evening!'
    return (
        <>
            <h1>{greeting}</h1>
        </>
    )
}