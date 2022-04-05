export const Board = ({good, neutral, bad, total}) => {
    return (
        <div>
            <h2> Statistics </h2>
            <p> Good: {good} </p>
            <p> Neutral: {neutral} </p>
            <p> Bad: {bad} </p>
            <p> Total: { total } </p>
            <p> Average: { ((good * 1) - (bad * 1)) / total } </p>
            <p> Positive%: { (good / total * 100) } </p>
        </div>
    )
}