function avatar(user) {
    const avatar = document.createElement('img');
    avatar.alt = `%{user.login}'s avatar`;
    avatar.src = user.avatar_url;
    return avatar;
  }

  async function getJSON(url) {
    const response = await fetch(url);
    return response.json()
  }

  async function getUser(username) {
    return getJSON(`https://api.github.com/users/${username}`);
  }

  async function gitStuff() {
    const user = await getUser('PaddyFRGitHub');
    console.log(user);
    const repos = await getJSON(user.repos_url);
    console.log(repos);

    // Retrieve the container element from the HTML document
    const ghapi = document.getElementById('ghapi');

    // Create and append the user's avatar to the container element
    const a = avatar(user);
    ghapi.appendChild(a);

    // Create a list of the user's repositories
    const repoList = document.createElement('ul');
    repos.forEach(repo => {
      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.textContent = repo.name;

      const repoListItem = document.createElement('li');
      repoListItem.appendChild(repoLink);
      repoList.appendChild(repoListItem);
    });

    // Append the list of repositories to the container element
    ghapi.appendChild(repoList);
  }

  gitStuff();