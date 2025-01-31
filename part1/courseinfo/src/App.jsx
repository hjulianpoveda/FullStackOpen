
const Header = (props) => {
  return (
      <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  //console.log(props);
  return (
      <p>
        {props.item.name} {props.item.exercises}
      </p>
  )
}

const Content = (props) => {
  return (
    <div>     
      <Part item={props.course.parts[0]} />
      <Part item={props.course.parts[1]} />
      <Part item={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
      <p>Number of exercises {
        props.course.parts[0].exercises+
        props.course.parts[1].exercises+
        props.course.parts[2].exercises
        }</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App