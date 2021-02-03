// para puxar o footer sempre para o fim da pagina
const footer = document.getElementsByTagName('footer')[0]
if(document.body.scrollHeight < window.innerHeight) {
  footer.classList.add('footer-down')
  console.log(document.body.scrollWidth)
  footer.style.width = `${document.body.scrollWidth}px`
} else {
  footer.classList.remove('footer-down')
}

// para manipular os elementos quando se coloca valores no input
const searchInput = document.getElementsByName('search')[0];
searchInput.addEventListener('keyup', () => {
  const elements = document.getElementsByClassName('results');
  for(let i = 0; i < elements.length; i += 1) {
    const value = elements[i].getElementsByClassName('results-ingredient')[0].innerHTML.toUpperCase()
    if(value.indexOf(searchInput.value.toUpperCase()) < 0) {
      elements[i].classList.add('hidden');
    }
    if(value.indexOf(searchInput.value.toUpperCase())  > -1) {
      elements[i].classList.remove('hidden');
    }
  }

  // se o utilizador colocar um valor que nao foi encontrado, recebe uma mensagem de erro:
  const hidden = document.getElementsByClassName('hidden')
  if (hidden.length === elements.length && document.getElementsByClassName('container-notfound').length < 1){
    const input = document.getElementsByClassName('container-input');
    const notFound = document.createElement('div')
    input[0].insertAdjacentElement("afterend", notFound)
    notFound.classList.add('container__red', 'container-notfound')
    notFound.innerHTML = 'E-numero não encontrado. Tente outro.'
  } else if (hidden.length < elements.length && document.getElementsByClassName('container-notfound')[0]) {
    document.getElementsByClassName('container-notfound')[0].remove()
  }

    
  // para puxar o footer sempre para o fim da pagina ao inserir valores no input
  if(document.body.scrollHeight < window.innerHeight) {
    footer.classList.add('footer-down')
    footer.style.width = `${document.body.scrollWidth}px`
  } else {
    footer.classList.remove('footer-down')
  }
})

window.addEventListener('resize', () => {
  // server para fazer resize no width do elemento sempre que o window do utilizador muda
  if(document.body.scrollHeight < window.innerHeight) {
    footer.style.width = `${document.body.scrollWidth}px`
  } else {
    footer.classList.remove('footer-down')
  }
});