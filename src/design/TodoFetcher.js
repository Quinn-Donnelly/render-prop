import React, {useState} from 'react';

const todoData = [
  {
    title: 'That thing'
  },
  {
    title: 'Fly to Tundra'
  }
];
//
// const TodoFetcher = ({Component}) => {
//   const [todos, setTodos] = useState(todoData);
//
//   const displayTodos = todos.map(todo => <Component key={todo.title} todo={todo} />);
//
//   return (
//     <div>
//       {displayTodos}
//     </div>
//   );
// };

export class TodoFetcher extends React.Component {

  constructor(props) {
    super();

  }

  render() {
    const displayTodos = todoData.map(todo => (<this.props.Component key={todo.title} todo={todo} />));

    return (
        <div>
          {displayTodos}
        </div>
    );
  }
}

export default TodoFetcher;