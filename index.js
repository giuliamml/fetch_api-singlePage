const pokemonList = document.querySelector(".pokemon_list");

const url = "https://api.pokemontcg.io/v1/cards";

const getData = async (url = "https://api.pokemontcg.io/v1/cards") => {
  let response = await fetch((url = "https://api.pokemontcg.io/v1/cards"));
  let data = await response.json();
  return data;
};

const main = async () => {
  let data = await getData(url);
  console.log(data);

  data.cards.forEach((card) => {
    let {
      name,
      rarity,
      evolvesFrom,
      nationalPokedexNumber,
      types,
      imageUrl,
    } = card;

    types = Array.isArray(types) ? types.join() : "";
    evolvesFrom = evolvesFrom ? `${card.evolvesFrom}` : "not evolved";
    nationalPokedexNumber = nationalPokedexNumber ? `${card.nationalPokedexNumber}` : 'no Pokedex Number'

    const pokemon = document.createElement("div");
    pokemon.className = "pokemon_div";
    const pokemonImg = document.createElement("img");
    pokemonImg.src = imageUrl;

    const pokemonDetails = document.createElement("div");
    pokemonDetails.className = "pokemon_details";
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
