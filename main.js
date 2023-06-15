const linksSocialMedia = {
  github: 'mathquente',
  youtube: 'UCn7qn2k0o0zmid0QvqSw93Q',
  facebook: 'Mathdesousa',
  instagram: 'math_quente',
  twitter: 'mathquente'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${
      social === 'youtube' ? 'channel/' : ''
    }${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userNick.textContent = data.login
    })
}

getGitHubProfileInfos()
