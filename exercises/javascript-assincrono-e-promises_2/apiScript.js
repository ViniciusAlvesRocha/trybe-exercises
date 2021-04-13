// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const renderJock = (responseJock) => {
  const h2JockContainer = document.getElementById('jokeContainer');
  h2JockContainer.innerText = responseJock.joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((responseJock) => {
    console.log(responseJock);
    renderJock(responseJock);
  });
};

window.onload = () => fetchJoke();