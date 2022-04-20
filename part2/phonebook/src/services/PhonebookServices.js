import axios from 'axios'
const phoneURL = 'http://localhost:3001/persons'

const getPersons = () => {
  const request = axios.get(phoneURL)
  return request.then(response => response.data)
}

const addPerson = personObj => {
  const request = axios.post(phoneURL, personObj)
  return request.then(response => response.data)
}

const deletePerson = id => {
  const request = axios.delete(`${phoneURL}/${id}`)
  return request.then(response => response.data)
}

const replacePerson = (id, personObj) => {
  const request = axios.put(`${phoneURL}/${id}`, personObj)
  return request.then(response => response.data)
}

const Phoneservices = { getPersons, addPerson, deletePerson, replacePerson }

export default Phoneservices