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

   // Create textx
   const cardTexts = document.createElement('ul');
   cardTexts.setAttribute('class', 'card--text');

   for (let j = 0; j < 6; j++) {
      const text = document.createElement('li');
      text.innerText = `${pokemon.stats[j].stat.name.toUpperCase()} : ${
         pokemon.stats[j]['base_stat']
      }`;
      cardTexts.append(text);
   }

   // Version
   const versionTexts = document.createElement('div');
   versionTexts.innerText = 'Appears in:';
   versionTexts.setAttribute('class', 'card--text');

   const text = document.createElement('p');
   for (const index of pokemon['game_indices']) {
      text.innerText += `${index.version.name}, `;
   }
   versionTexts.append(text);

   // Append
   card.append(pokemonName, img, cardTexts, versionTexts);
   cards.append(card);
}
