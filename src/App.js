import React, { useState } from "react";
import PokeCard from "./components/card";
import "./App.css";
import pokemonList from "./pokemonList";
import Filter from "./components/filter";
import Select from "./components/select";
import Grid from "@material-ui/core/Grid";
const App = () => {
  const [types, setTypes] = useState([
    "Grass",
    "Poison",
    "Fire",
    "Water",
    "Flying",
    "Bug",
    "Normal",
  ]);

  const [typeSelected, setTypeSelected] = useState("Todos");
  const [pokemon, setPokemon] = useState(pokemonList);
  const [searchPokemon, setSearchPokemon] = useState("");
  const handleTypeSelect = (event) => {
    console.log(setTypes, setPokemon);
    setTypeSelected(event.target.value);
  };
  const handleFilter = (event) => {
    event.preventDefault();
    setSearchPokemon(event.target.value);
  };
  const filteredList = () => {
    let filterlist = pokemonList;
    filterlist
      .filter((poke) => poke.name.english.toLowerCase().includes(searchPokemon))
      .map((p) => {
        console.log(p.name.english);
        return <li>rendring</li>;
      });
  };
  return (
    <div className="container">
      <div className="filters">
        <Select types={types} handleTypeSelect={handleTypeSelect} />
      </div>
      <div className="filters">
        <Filter handleFilter={handleFilter} filteredList={filteredList} />
      </div>
      <div className="App">
        <Grid container spacing={4}>
          {pokemon
            .filter((poke) =>
              poke.name.english.toLowerCase().includes(searchPokemon)
            )
            .filter((pokemon) => {
              return typeSelected === "Todos"
                ? true
                : pokemon.type.includes(typeSelected);
            })
            .map((pokemon, index) => {
              return (
                <Grid item key={index} lg={3} md={6} sm={6} xs={12}>
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
