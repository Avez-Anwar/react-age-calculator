import React, { useState } from 'react';

function App() {
  const [state, setState] = useState();

  const handleChange = e => {
    setState(e.target.value);
  };

  const date = new Date();
  const newDate = date.getFullYear();

  const handleSubmit = e => {
    e.preventDefault();
    setState(alert('Your age is ' + (newDate - state)));
    setState(' ');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ width: '70%' }}
        type="number"
        placeholder="In which year you were born"
        autoFocus
        onChange={handleChange}
        value={state}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default App;
