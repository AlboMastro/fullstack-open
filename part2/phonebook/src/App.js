import { useEffect, useState } from 'react'

import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import { PersonForm } from './components/PersonForm'
import Phoneservices from './services/PhonebookServices'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterKey, setNewFilter] = useState('')

  const personObj = {
    name: newName,
    number: newNumber
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChanges = (event) => {
    setNewFilter(filterSearch(event.target.value));
  }

  const addNewName = (event) => {
    event.preventDefault()

    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} is already registered`)
    } else {
        Phoneservices
        .addPerson(personObj)
        .then(person => {
          console.log('Data sent to server');
          setPersons(persons.concat(person));
          setNewName('')
          setNewNumber('')
      })
    }
  }
  useEffect(() => {
    console.log('Effect loaded')
    Phoneservices
      .getPersons()
      .then(persons => {
        console.log('Data fetched')
        setPersons(persons)
    });
  }, [])

  const handleDelete = (id) => {
    if (window.alert(`Do you want to delete the user ${id}?`)) {
      console.log('WORK')
      Phoneservices
      .deletePerson(id)
      .then(setPersons(persons.filter(person => person.id !== id)))
      } 
  }

  const filterSearch = (search) => persons.filter((f) => f.name.includes(search));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleFilterChanges} />
      <PersonForm
        onSubmit={addNewName}
        nameValue={newName}
        nameHandler={handleNameChange}
        numberValue={newNumber}
        numberHandler={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filterKey={filterKey} deletefunc={handleDelete} />
    </div>
  )
}

export default App
