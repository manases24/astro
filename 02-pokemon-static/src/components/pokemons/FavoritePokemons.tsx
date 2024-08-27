import NavBar from '@components/shared/NavBar.astro';
import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { For, createSignal } from 'solid-js';
import { FavoritePokemonCard } from './FavoritePokemonCard.tsx';


const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );

  return favoritePokemons;
};

export function FavoritePokemons() {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
        {/* {(pokemon) => <h1>{pokemon.name}</h1>} */}
      </For>
    </div>
  );
};