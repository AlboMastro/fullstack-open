const StatisticLine = ({text, value}) => <p> {text}: {value}</p>

export const Statistics = ({good, neutral, bad, total}) => {
    if (total != 0) {    
        return (
            <div>
                <h2> Statistics </h2>
                <StatisticLine text={'Good'} value={good} />
                <StatisticLine text={'Neutral'} value={neutral} />
                <StatisticLine text={'Bad'} value={bad} />
                <StatisticLine text={'Total'} value={total} />
                <StatisticLine text={'Average'} value={(good - bad) / total} />
                <StatisticLine text={'Positive%'} value={(good / total * 100)} />
            </div>
        )
    } else {
        return (
            <h2> No Feedback given yet </h2>
        )
    }
}