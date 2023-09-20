import { /* useEffect ,*/ useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  // useEffect(() => {
  //   console.log(name)
  // }, [name])

  const handleSubmitForm = (event) => {
    event.preventDefault()
    alert("name: " + name + " - Lozinka: " + password)
    setName("")
    setPassword("")
  }

  return (
    <>
      <h1>Login:</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>
              Name:
              <input type="text" name="ime" value={name} onChange={handleNameChange}/>
          </label>
        </div>
        <div>
          <label>
              Password:
              <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
          </label>
        </div>
        <input type="submit" value="Potvrdi" />
      </form>
    </>
  )
}

export default App
