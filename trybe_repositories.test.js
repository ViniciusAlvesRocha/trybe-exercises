const urlTrybe = 'https://api.github.com/orgs/tryber/repos';

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('5 - verificando se os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista', () => {
  it ('O repositorio sd-01-week4-5-project-todo-list está presente na lista', () => {
    expect.assertions(1);
    return getRepos(urlTrybe).then(repositories => expect(repositories).toContain('sd-01-week4-5-project-todo-list'));
  });
  it ('O repositório sd-01-week4-5-project-meme-generator está presente na lista', () => {
    expect.assertions(1);
    return getRepos(urlTrybe).then(repositories => expect(repositories).toContain('sd-01-week4-5-project-meme-generator'));
  });
});