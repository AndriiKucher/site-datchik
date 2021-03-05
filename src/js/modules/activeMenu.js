function activeMenu() {
  const link = document.querySelectorAll('.menu__item a')
  const logo = document.querySelector('.logo')
  const currentLocation = window.location.href

  if (logo.href === currentLocation) {
    logo.removeAttribute('href')
  }

  link.forEach((a) => {
    if (a.href === currentLocation) {
      a.parentNode.classList.add('menu__item_active')
      a.removeAttribute('href')
    }
  })
}

export default activeMenu
