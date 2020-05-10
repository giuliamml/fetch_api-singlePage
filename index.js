const pokemonList = document.querySelector(".pokemon_list");

const url = "https://api.pokemontcg.io/v1/cards";

//call like this: let data = await getData(url)
//always put await
const getData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const main = async () => {
  let data = await getData(url);
  console.log(data);

  data.cards.forEach((card) => {
    const {
      name,
      rarity,
      evolvesFrom,
      nationalPokedexNumber,
      types,
      imageUrl,
    } = card;

    const pokemon = document.createElement("div");
    pokemon.className = "pokemon_div";
    const pokemonImg = document.createElement("img");
    pokemonImg.src = imageUrl;

    const pokemonDetails = document.createElement("div");
    pokemonDetails.className = 'pokemon_details'
    pokemonDetails.innerHTML = `<p> ${name} <br>
        <span>type:</span> ${types} <br>
        <span>rarity:</span> ${rarity} <br>
        <span>evolution:</span> ${evolvesFrom} <br>
        <span>pokedex number:</span> ${nationalPokedexNumber}
        </p>`;

    pokemon.append(pokemonImg, pokemonDetails);
    pokemonList.append(pokemon);
  });
};

main();
