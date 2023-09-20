import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [text, setText] = useState('');
  const [base, setBase] = useState([]);

  let date = new Date();

  const handleButtonClick = () => {
    setBase(
      [ ...base, { id: nextId++, text: text }
    ]);
    setText("");
  }

  return (
    <>
      <h1>Koristeći formu</h1>
      <h2>...unesi text u state</h2>
      <div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleButtonClick}>Add</button>
      </div>
      <ul>
        {base.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
        {date.getVarDate}
      </ul>
    </>
  );
}
