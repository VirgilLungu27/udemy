const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 905;
const color = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    steel: 'darkgrey',
    ghost: 'rebeccapurple',
    dark: 'black',  
    ice: 'lightblue'
}

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
    } 
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = res.json();
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://media.printables.com/media/prints/30233/images/300606_05d12d0c-053b-47c7-a29d-57ec89e338e8/thumbs/cover/800x800/png/bulbasaur_original.webp" alt="">
    </div>
    <div class="info">
       <span class="number">#001</span>
        <h3 class="name">Bulbasaur</h3>
        <small class="type">Type: <span>Grass/Poison</span></small> 
    </div>
    `
}

fetchPokemon()