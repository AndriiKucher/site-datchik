function changeLanguage() {
  try {
    const checkBox = document.querySelector('#checkbox')
    const ru = document.querySelectorAll('[data-lang=ru]')
    const ua = document.querySelectorAll('[data-lang=ua]')

    ua.forEach((i) => (i.style.display = 'none'))

    if (localStorage.getItem('checked') === 'true') {
      checkBox.checked = true
      showUa()
    }

    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        showUa()
        localStorage.setItem('checked', true)
      } else {
        showRu()
        localStorage.setItem('checked', false)
      }
    })

    function showRu() {
      ru.forEach((i) => (i.style.display = 'block'))
      ua.forEach((i) => (i.style.display = 'none'))
    }
    function showUa() {
      ua.forEach((i) => (i.style.display = 'block'))
      ru.forEach((i) => (i.style.display = 'none'))
    }
  } catch {}
}

export default changeLanguage
