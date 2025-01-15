const Filter = ({handleFilterChange, searchPerson}) => {
  return (
    <div>
      filter shown with
      <input
        onChange={handleFilterChange}
        value={searchPerson}
        type="text"
        placeholder="type to search"
      />
    </div>
  )
}

export default Filter