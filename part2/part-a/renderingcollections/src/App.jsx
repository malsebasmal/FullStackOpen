import './App.css'



const App = ({notes}) => {
  const listItem = notes.map(note => <li key={note.id}>{note.content}</li>)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {listItem}
      </ul>
    </div>
  )
}

export default App
