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
    const repos = await getJSON(user.repos_url);
    const ghapi = document.getElementById('ghapi');
    const a = avatar(user);
    ghapi.appendChild(a);

    const repoList = document.createElement('ul');
    repos.forEach(async (repo) => {
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.name;

        const repoListItem = document.createElement('li');
        repoListItem.appendChild(repoLink);

        const languages = await getJSON(repo.languages_url);

        const primaryLanguage = repo.language;

        const languageList = document.createElement('ul');
        Object.keys(languages).forEach((language) => {
            const languageListItem = document.createElement('li');
            languageListItem.textContent = `${language}: ${languages[language]} bytes`;
            languageList.appendChild(languageListItem);
        });

        if (primaryLanguage) {
            repoListItem.appendChild(document.createTextNode(` (${primaryLanguage}) `));
        }
        repoListItem.appendChild(languageList);

        repoList.appendChild(repoListItem);
    });

    ghapi.appendChild(repoList);
}

gitStuff();