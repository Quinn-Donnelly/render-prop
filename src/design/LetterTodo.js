import React from 'react';

const LetterTodo = ({todo}) => {
  const letterDisplay = todo.title ? todo.title[0] : '';
  return (
      <p>{letterDisplay}</p>
  );
};

export default LetterTodo;