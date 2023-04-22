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
  console.log(user)
  const repos = await getJSON(user.repos_url);
  console.log(repos)
  const ghapi = document.getElementById('ghapi');
  const a = avatar(user);
  ghapi.appendChild(a);

  const dropdownContent = document.querySelector('.dropdown-content');
  repos.forEach(async (repo) => {
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    dropdownContent.appendChild(repoLink);

    const languages = await getJSON(repo.languages_url);
    console.log(languages)

    const primaryLanguage = repo.language;

    const languageList = document.createElement('ul');
    Object.keys(languages).forEach((language) => {
      const languageListItem = document.createElement('li');
      languageListItem.textContent = `${language}: ${languages[language]} bytes`;
      languageList.appendChild(languageListItem);
    });

    if (primaryLanguage) {
      repoLink.appendChild(document.createTextNode(` (${primaryLanguage}) `));
    }
    repoLink.appendChild(languageList);
  });

  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.dropdown-btn');

  dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('active');

  });
}

gitStuff();


const button = document.querySelector('.dropdown-btn2');
const dropdown = document.querySelector('.dropdown-content2');

button.addEventListener('click', function () {
  dropdown.classList.toggle('show');
  document.body.classList.toggle('dropdown-open');
});