import { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        age: number
      }[]
    >
  >
}

const PeopleList: React.FC<IProps> = ({ people, setPeople }: IProps) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const clickHandler = (): void => {
    if (!input.name || !input.age) return

    setPeople((prev) => [
      ...prev,
      {
        name: input.name,
        age: parseInt(input.age),
      },
    ])

    setInput({
      name: '',
      age: '',
    })
  }

  const persons = () => {
    return people.map((person, index) => {
      return (
        <li key={index}>
          <p>
            <strong>Name:</strong> {person.name}
          </p>
          <p>
            <strong>Age:</strong> {person.age}
          </p>
        </li>
      )
    })
  }

  return (
    <>
      <ul>{persons()}</ul>
      <input
        onChange={changeHandler}
        type="text"
        name="name"
        placeholder="name"
        value={input.name}
      />
      <input
        onChange={changeHandler}
        type="number"
        name="age"
        placeholder="age"
        value={input.age}
      />
      <button type="button" onClick={clickHandler}>
        Add
      </button>
    </>
  )
}

export default PeopleList
