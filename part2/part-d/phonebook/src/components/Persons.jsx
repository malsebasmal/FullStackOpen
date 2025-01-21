const Persons = ({persons, searchPerson, deletedPerson}) => {

  const filteredPersons = searchPerson ?
    persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLocaleLowerCase())) :
    persons

  return ( 
    <ul>
      {filteredPersons.map(person => 
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => {deletedPerson(person.id)}}>delete</button>
        </li>
      )}
    </ul>
  )
}

export default Persons