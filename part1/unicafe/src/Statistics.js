const StatisticLine = ({text, value}) => <><tr><td>{text}:</td><td>{value}</td></tr></> 

export const Statistics = ({good, neutral, bad, total}) => {
    if (total != 0) {    
        return (
            <>
                <table>
                    <thead><tr><td>Statistics</td></tr></thead>
                    <tbody>
                        <StatisticLine text={'Good'}value={good}/> 
                        <StatisticLine text={'Neutral'}value={neutral}/> 
                        <StatisticLine text={'Bad'}value={bad}/> 
                        <StatisticLine text={'Total'}value={total}/> 
                        <StatisticLine text={'Average'}value={(good-bad)/total}/> 
                        <StatisticLine text={'Positive%'}value={(good/total*100)}/>
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <h2> No Feedback given yet </h2>
        )
    }
}