function ShowHideModal() {
  const trigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    bcg = document.querySelector('.bcg'),
    closeBtn = modal.querySelector('[data-close]'),
    scroll = calcScroll()

  trigger.forEach(b => {
    b.addEventListener('click', () => {
      showModal()
    })
  })

  closeBtn.addEventListener('click', () => {
    closeModal()
  })

  document.addEventListener('click', (e) => {
    if (e.target === bcg && modal.classList.contains('modal_show')) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('modal_show')) {
      closeModal()
    }
  })

  function showModal() {
    document.body.style.marginRight = `${scroll}px`
    modal.classList.add('modal_show')
    bcg.classList.add('bcg_show')
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    modal.classList.remove('modal_show')
    bcg.classList.remove('bcg_show')
    document.body.style.overflow = 'auto'
    document.body.style.marginRight = `0px`
  }

  function calcScroll() {
    let div = document.createElement('div')
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()

    return scrollWidth
  }
}

export default ShowHideModal
