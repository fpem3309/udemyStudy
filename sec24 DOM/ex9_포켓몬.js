
const container = document.querySelector('#container');

// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// container.appendChild(newImg);


// 반복
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 1010; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');

  const label = document.createElement('span');
  label.innerText = `#${i}`;

  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png`;
  newImg.classList.add('newImg');

  pokemon.appendChild(newImg);  // div에 img태그 추가
  pokemon.appendChild(label);   // div에 span태그 추가
  container.appendChild(pokemon); // div를 추가
}