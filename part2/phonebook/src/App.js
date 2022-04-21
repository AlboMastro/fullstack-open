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
    const isPersonAdded = persons.map(p => p.name).includes(newName);
  
    if (isPersonAdded) {
      handleChange();
    } else {
        Phoneservices
        .addPerson(personObj)
        .then(person => {
          console.log('Data sent to server');
          setPersons(persons.concat(person));
          setNewFilter(persons.concat(person));
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

  const handleDelete = (id, name) => {

    
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      const deletedPeople = persons.filter(person => person.id !== id)
        Phoneservices
        .deletePerson(id)
        .then(setPersons(deletedPeople))
        .then(setNewFilter(deletedPeople));
    }
  }

  const handleChange = () => {
    const changedPeople = persons.filter(p => p.number !== newNumber)
    const existingPerson = persons.find(p => p.name === newName);

    if (window.confirm(`You are about to change ${existingPerson.name}'s number. Are you sure?`)) {
      Phoneservices
      .replacePerson(existingPerson.id, personObj)
      .then(setPersons(changedPeople))
      .then(setNewFilter(changedPeople));
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
