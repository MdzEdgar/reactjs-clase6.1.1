import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { getAllPokemonsThunk } from "./store/slices/pokemons.slice";

function App() {
  const pokemons = useSelector((store) => store.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemonsThunk());
  }, []);

  return (
    <div className="App">
      <h2>Redux Thunk 1</h2>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </div>
  );
}

export default App;