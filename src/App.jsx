import './App.css';
import useCustomHook from './hooks/useCustomHook';
import Personaje from './components/Personaje';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {
  const { data: pokemon, loading: loadingPokemon } = useCustomHook(urlPokemon);
  const { data: rick, loading: loadingRick } = useCustomHook(urlRick);

  return (
    <div className="App">
      {loadingPokemon ? (
        <p>Cargando personaje de Pokémon...</p>
      ) : (
        <Personaje
          titulo="Personaje Pokémon"
          nombre={pokemon.name}
          imagen={pokemon.sprites.front_default}
        />
      )}

      {loadingRick ? (
        <p>Cargando personaje de Rick and Morty...</p>
      ) : (
        <Personaje
          titulo="Personaje Rick and Morty"
          nombre={rick.name}
          imagen={rick.image}
        />
      )}
    </div>
  );
}

export default App;
