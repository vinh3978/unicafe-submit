import {useState} from 'react'
const Button = (props) => {
  return (
    <button onClick={props.function}>{props.text}</button>
  )
}

const StatisticsLine = ({text,value}) =>{
  return (
    
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      
  )
}

const Statistics = ({good,bad,neutral}) =>{
 return (
  <>
  <table>
      <StatisticsLine text={'good'} value={good} />
      <StatisticsLine text={'neutral'} value={neutral} />
      <StatisticsLine text={'bad'} value={bad} />
      <StatisticsLine text={'all'} value={good+neutral+bad} />
      <StatisticsLine text={'average'} value={(good-bad)/(good+neutral+bad)} />
      <StatisticsLine text={'positive'} value={((good/(good+neutral+bad))*100)+'%'} />
      </table>
  </>
 )
}

const App =() =>{
  //save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  if (good===0 && bad===0 && neutral==0) {
    return(
      
      <div>
        <h1>give feedback</h1>
      <Button function={() => setGood(good+1)} text={'good'} />
      <Button function={() => setNeutral(neutral+1)} text={'neutral'}/>
      <Button function={() => setBad(bad+1)} text={'bad'} />
      <h1>statistics</h1>
        No feedback given
        </div>
    )

  } else 

  {return(
    <div>
      <h1>give feedback</h1>
      <Button function={() => setGood(good+1)} text={'good'} />
      <Button function={() => setNeutral(neutral+1)} text={'neutral'}/>
      <Button function={() => setBad(bad+1)} text={'bad'} />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )}
}

export default App