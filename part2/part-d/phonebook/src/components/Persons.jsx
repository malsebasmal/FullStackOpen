const Persons = ({persons, searchPerson}) => {

  const filteredPersons = searchPerson ?
    persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLocaleLowerCase())) :
    persons

  return ( 
    <ul>
      {filteredPersons.map(person => 
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      )}
    </ul>
  )
}

export default Persons