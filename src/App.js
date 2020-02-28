import React from 'react';
import logo from './logo.svg';
import Timeline from './timeline/Timeline';
import './App.css';
import Todo from './design/TodoFetcher';
import TodoItem from "./design/TodoItem";
import LetterTodo from "./design/LetterTodo";
import ErrorBoundary from "./ErrorBoundary";

const fallback = (props) => <p>Sorry not ready right now...</p>

function App() {
  return (
    <div>
      <Timeline />
      <ErrorBoundary Fallback={fallback}>
        <Todo Component={TodoItem} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
