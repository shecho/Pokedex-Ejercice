import React, { useState } from "react";
import Card from "./components/card";
import "./App.css";
import pokemonList from "./pokemonList";
import Filter from "./components/filter";
import Select from "./components/select";
const App = (props) => {
  const [types, setTypes] = useState([
    "Grass",
    "Poison",
    "Fire",
    "Water",
    "Flying",
    "Bug",
    "Normal",
  ]);

  const [pokemon, setPokemon] = useState(pokemonList);
  return (
    <div className="container">
      <div className="filters">
        <Select types={types} />
      </div>
      <div className="filters">
        <Filter />
      </div>
      <div className="App"></div>
    </div>
  );
};

export default App;
