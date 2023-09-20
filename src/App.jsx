import { useState } from 'react';
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');   // state text-a koji unosimo
  const [base, setBase] = useState([]);             // state prethodni unosi

  const handleSubmitFnc = (event) => {
    event.preventDefault()  // sprječava refresh stranice nakon submit-anja forme
    if (inputText) {
      let date = new Date()
      setBase([...base, { id: base.length + "-" + date.getTime(), text: inputText }]);
    }                              // ako je unesen text, update-a state baze
    setInputText("");              // čisti inputText state -> čisti input field
  }

  return (
    <>
      <h1>Koristeći formu</h1>
      <h2>...unesi text u state</h2>
      <form onSubmit={handleSubmitFnc}>
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <input type="submit" value="Add"></input>
      </form>
      <h2>...i ispiši na ekranu</h2>
      <h3>(može lista umjesto alert?)</h3>
      <ul>
        {base.map(item => (<li key={item.id}>{item.text}</li>))}
      </ul>
    </>
  );
}

export default App;
