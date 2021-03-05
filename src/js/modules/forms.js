const forms = () => {
  const modal = document.querySelector('.modal')
  const form = modal.querySelector('form')
  const bcg = document.querySelector('.bcg')

  const message = {
    loading: 'Отправка',
    success: 'Спасибо! Мы с вами свяжемся в рабочее время',
    failure: 'Что-то пошло не так...',
    finally: 'Вы уже отправили свои данные, мы с вами обязательно свяжемся !',
  }

  const postData = async (url = '', data = {}) => {
    modal.textContent = message.loading
    let response = await fetch(url, {
      method: 'POST',
      body: new FormData(data),
    })

    return await response.text()
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    postData('assets/server.php', form)
      .then((res) => {
        modal.textContent = message.success
        console.log(res)
      })
      .catch(() => (modal.textContent = message.failure))
      .finally(() => {
        setTimeout(() => {
          modal.textContent = message.finally
          closeModal()
        }, 5000)
      })
  })

  function closeModal() {
    modal.classList.remove('modal_show')
    bcg.classList.remove('bcg_show')
    document.body.style.overflow = ''
    document.body.style.marginRight = `0px`
  }
}

export default forms
