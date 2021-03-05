function setAsideSticky() {
  const aside = document.querySelector('.aside_anchors'),
    sections = document.querySelectorAll('section.coils'),
    anchorLink = aside.querySelectorAll('.aside_anchors a'),
    asidePos = aside.getBoundingClientRect().top

  anchorLink.forEach((i) => {
    i.classList.remove('active')
  })

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= asidePos) {
      aside.style.position = 'sticky'
      aside.style.top = '15px'
    } else {
      aside.style.position = 'static'
    }
    addRemoveActiveClass()
  })

  function addRemoveActiveClass() {
    anchorLink.forEach((a) => {
      a.classList.remove('active')
    })

    sections.forEach((section, i) => {
      let top = section.offsetTop,
        bottom = top + section.clientHeight

      if (document.documentElement.scrollTop >= top && document.documentElement.scrollTop <= bottom) {
        anchorLink[i].classList.add('active')
      }
    })
  }
}

export default setAsideSticky
