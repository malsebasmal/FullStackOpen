import Part from "./Part.jsx"

const Content = ({parts}) => {
  const total = parts.reduce((exercise, part) => {
    return exercise + part.exercises
  }, 0)

  return (
    <>
      <ul>
        {parts.map(part => 
          <li key={part.id}>
            <Part content={part}/>
          </li>
        )}
      </ul>
      <p>Total of {total} exercises</p>
    </>
  )
}

export default Content