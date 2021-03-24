const longestWord = (worlds) => {
  worlds = worlds.split(' ');
  largerWorld = '';
  for (let world of worlds) {
    if (world.length > largerWorld.length) {
      largerWorld = world;
    }
  }
  return largerWorld;
}

console.log(longestWord('Vinicius Alves da Rocha'));