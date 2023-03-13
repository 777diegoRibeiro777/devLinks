const toggleMode = () => {
  const html = document.documentElement

  html.classList.toggle('light')

  
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatarLight.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

  if (html.classList.contains('light')) {
    img.setAttribute('alt', 'Imagem de perfil arredondada com o fundo azul')
  } else {
    img.setAttribute('alt', 'Imagem de perfil arredondada com o fundo lilás')
  }
}