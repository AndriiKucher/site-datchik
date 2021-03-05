function createPreloader() {
  const divPreloader = document.createElement('div')
  divPreloader.classList.add('preloader')

  const spanAnimation = document.createElement('span')
  spanAnimation.classList.add('preloader__animation')

  const spanText = document.createElement('span')
  spanText.classList.add('preloader__text')
  spanText.textContent = 'Loading...'

  divPreloader.append(spanAnimation, spanText)

  document.body.prepend(divPreloader)
}

export default createPreloader
