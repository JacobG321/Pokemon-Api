import React from 'react';
import './App.css';
import PokemonAxios from './components/PokemonAxios';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <Pokemon />
      <PokemonAxios/>
    </div>
  );
}

export default App;
