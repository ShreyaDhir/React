import React from 'react';
import TodoItem from './ToDoItem';
import todoData from './To-do';

function App () {
   const todoComponent = todoData.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    )
};

export default App;