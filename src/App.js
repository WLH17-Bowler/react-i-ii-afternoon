import React from 'react';
import './App.css';
import Deck from './Components/Deck'

const App = () => {
  return (
    <div>
      <header className="App-header">Home</header>
      <div id='white-container'>
        <div id='main-body'>
            <Deck id='main-deck' />
        </div>
      </div>
    </div>
  )
}
export default App