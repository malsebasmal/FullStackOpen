const Header = (props) => {
  console.log(props)

  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.part.map((item, index) => (
        <Part key={index} part={item.name} exercise={item.exercises}/>
      ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[1].exercises}
    </p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of component",
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total part={parts} />
    </div>
  )
}

export default App
