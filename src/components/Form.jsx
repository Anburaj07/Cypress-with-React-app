import React, { useState } from 'react';
import axios from 'axios'; // Import axios library

function Form() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/posts', { text: inputText });

      setItems([...items, response.data]);
      setInputText('');
    } catch (err) {
      setError('An error occurred while submitting the form');
    }
  };

  return (
    <div>
      <h1>Form Submission Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-input'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div className="error">{error}</div>}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
