import { Inter } from 'next/font/google';
import { KeyboardEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodoValue, setNewTodoValue] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTodoValue) {
      setTodos([...todos, newTodoValue]);
      setNewTodoValue('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">My ToDo App</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 pb-4">
          Just some description placeholder.
        </p>

        <fieldset>
          <legend className="sr-only">Todo List</legend>
          <div className="space-y-5">
            {todos.map((todo, index) => (
              <div key={index} className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id={`${index}`}
                    aria-describedby={`${index}-description`}
                    name={`${index}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor={`${index}`} className="font-normal">
                    {todo}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          className="mt-8 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Add a new todo"
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </main>
  );
}
