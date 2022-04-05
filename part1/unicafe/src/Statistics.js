export const Statistics = ({good, neutral, bad, total}) => {
    if (total != 0) {    
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
    } else {
        return (
            <h2> No Feedback given yet </h2>
        )
    }
}