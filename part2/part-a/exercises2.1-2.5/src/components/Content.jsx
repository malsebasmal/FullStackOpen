import Part from "./Part.jsx"

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map(part => 
        <li key={part.id}>
          <Part content={part}/>
        </li>
      )}
    </ul>
  )
}

export default Content