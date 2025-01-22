
const Header = (props) => {
  return (
      <h1>{props.name}</h1>
  )
}

const Part = (item) => {
  //console.log(item);
  return (
      <p>
        {item.obj.name} {item.obj.exercises}
      </p>
  )
}

const Content = (list) => {
  return (
    <div>     
      <Part obj={list.obj1} />
      <Part obj={list.obj2} />
      <Part obj={list.obj3} />
    </div>
  )
}

const Total = (props) => {
  //console.log(props.total);
  return (
      <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };
 
  return (
    <div>
      <Header name={course} />
      <Content obj1={part1} obj2={part2} obj3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App