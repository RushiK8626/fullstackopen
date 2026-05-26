import { useState } from 'react'
import StatisticLine from './StatisticLine'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <StatisticLine text="Good:" value={good} />
      <StatisticLine text="Neutral:" value={neutral} />
      <StatisticLine text="Bad:" value={bad} />
      <StatisticLine text="Average:" value={(good + neutral + bad) / 3} />
      <StatisticLine text="Positive:" value={good / (good + neutral + bad) || 0} />
  </div>
  )
}

export default App