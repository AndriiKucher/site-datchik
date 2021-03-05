function toggleTabs() {
  const btns = document.querySelectorAll('.coils__question-btn'),
    tabs = document.querySelectorAll('.coils__descr')

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      tabs[i].classList.toggle('coils__descr_active')
    })
  })
}

export default toggleTabs
