import React from 'react';

const throwError = () => {
 throw new Error("Big Yikes");
};

const TodoItem = ({todo}) => {
  const displayTitle = todo.title ? todo.title : 'No Todo';

  throwError()
  return (
    <div>
      <p>{displayTitle}</p>
    </div>
  );
};

export default TodoItem;