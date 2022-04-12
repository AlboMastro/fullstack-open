import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already registered`) 
    } else {
    setPersons(persons.concat(nameObj))
    setNewName('')
    console.log(persons);
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const nameObj = {
    name: newName,
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> 
        { persons.map(person => 
          <li key={person.name}> {person.name} </li>  
        )}
      </ul>
    </div>
  )
}

export default App
