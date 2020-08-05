import React, { useState } from "react";
import PokeCard from "./components/card";
import "./App.css";
import pokemonList from "./pokemonList";
import Filter from "./components/filter";
import Select from "./components/select";
import Grid from "@material-ui/core/Grid";
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
      <div className="App">
        <Grid container spacing={5}>
          {pokemon.map((pokemon, index) => {
            return (
              <Grid item key={index} md={3} sm={6} xs={12}>
                <PokeCard pokemon={pokemon} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default App;
