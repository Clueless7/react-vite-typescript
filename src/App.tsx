import { useState } from 'react'
import PeopleList from './components/PeopleList'

export interface IState {
  people: {
    name: string
    age: number
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'John Doe',
      age: 33,
    },
  ])

  return (
    <>
      <PeopleList people={people} setPeople={setPeople} />
    </>
  )
}

export default App
