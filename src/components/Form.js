import React, { useState } from 'react';
import firebase from '../utils/firebase';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnClick = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
  };

  return (
    <div>
      <input
        type='text'
        value={title}
        placeholder='Add'
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick} type='submit'>
        Add
      </button>
    </div>
  );
}
