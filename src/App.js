import React, { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  //didMount
  useEffect(() => {
    const getPokemons = async () => {
        const endpoint = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=10';
        const { results } = await fetch(endpoint).then((response) => response.json());
        console.log(results);
        setPokemons(results);
    };

    getPokemons();
  }, [])
  return (
    <div>
      <h1>Trybe Go</h1>
      <button type="button" onClick={ handleMorePokemons } >Buscar +10</button>
      <ul>
        {
          pokemons.map(({name}, index) => <li key={ index }> { name } </li>)
        }
      </ul>
    </div>
  );
}

export default App;
