function avatar(user) {
   const avatar = document.createElement('img');
    avatar.alt = `%{user.login}'s avatar`;
    avatar.src = user.avatar_url;
    return avatar;
}


async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json()
}

getUser('PaddyFRGitHub').then(user => {
    const a = avatar(user);
    ghapi.append(a);
});