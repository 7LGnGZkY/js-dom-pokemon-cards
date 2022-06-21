console.log(data);

const cards = document.querySelector('.cards');

for (const pokemon of data) {
   // Create cards
   const card = document.createElement('li');
   card.setAttribute('class', 'card');

   // Create h2 pokemon names
   const pokemonName = document.createElement('h2');
   pokemonName.setAttribute('class', 'card--title');
   pokemonName.innerText =
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

   // Create image
   const img = document.createElement('img');
   img.setAttribute('class', 'card--img');
   img.setAttribute('width', 256);
   img.src = pokemon.sprites.other['official-artwork']['front_default'];

   // Create texts
   const cardTexts = document.createElement('ul');
   cardTexts.setAttribute('class', 'card--text');
}

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
