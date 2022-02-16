export default function Hobbies ({ fun }) {
    return (
        <>
            <p>Hobbies:</p>
            <ol>
                {fun.map((hobby, i) => <li key={i}>{hobby}</li>)}
            </ol>
        </>
    )
}