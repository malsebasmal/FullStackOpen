import Header from "./Header.jsx"
import Content from "./Content.jsx"

const Course = ({courses}) => {
  return (
    <div>
      {courses.map(course => 
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course