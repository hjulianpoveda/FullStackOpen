
const Header = (props) => {
  return (
      <h1>{props.name}</h1>
  )
}

const Part = (item) => {
  return (
      <p>
        {item.part.name} {item.part.times}
      </p>
  )
}

const Content = (part) => {
  return (
    <div>     
      <Part part={part.parts[0]}/>
      <Part part={part.parts[1]}/>
      <Part part={part.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
      <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      times: 10
    },
    {
      name: 'Using props to pass data',
      times: 7
    },
    {
      name: 'State of a component',
      times: 14
    }
  ];
  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total total={parts[0].times + parts[1].times + parts[2].times}/>
    </div>
  )
}

export default App