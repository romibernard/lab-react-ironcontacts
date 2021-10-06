import contacts from "./contacts.json";
import './App.css';
import React, { useState } from "react"

function App() {
  //console.log(contacts)
  const [contactArr, setContact] = useState(contacts.slice(0, 5))
  console.log(contactArr)

  function oscar(won) {
    if (won === true) {
      return "🏆"
    }
  }
  function emmy(won) {
    if (won === true) {
      return "🏆"
    }
  }
  function randomContact(event) {
    event.preventDefault()
    let randomContact = Math.floor(Math.random() * (contacts.length - 0)) + 0;
    let finalContact = contacts[randomContact]
    console.log(finalContact)
    setContact([...contactArr, finalContact])
    //console.log(randomContact)
  }
  function nameContact(event) {
    event.preventDefault()
    let nameContact = contactArr.sort((a, b) => a.name.localeCompare(b.name))
    console.log(nameContact)
    setContact(nameContact)
  }

  function popularityContact(event) {
    event.preventDefault()
    let popularityContact = contactArr.sort((a, b) => b.popularity - a.popularity)
    console.log(popularityContact)
    setContact(popularityContact)
  }

  //aquí empieza JSX
  return (
    <div className="App">
      <button onClick={randomContact}>Add random contact</button>
      <button onClick={nameContact}>Sort by name</button>
      <button onClick={popularityContact}>Sort by popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contactArr.map((contact) => {
          return (
            <tr>
              <td>
                <img style={{ width: "100px" }} src={contact.pictureUrl} alt=""></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{oscar(contact.wonOscar)}</td>
              <td>{emmy(contact.wonEmmy)}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;