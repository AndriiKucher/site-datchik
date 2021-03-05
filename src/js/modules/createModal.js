function createModal() {
  const modal = document.createElement('div')
  const bcg = document.createElement('div')
  bcg.classList.add('bcg')
  modal.classList.add('modal')
  modal.innerHTML = `
      <div class="modal__header">Замовити дзвінок</div>
      <div class="modal__descr">Залиште свої дані, і ми вам зателефонуємо</div>
      <button data-close class="modalCloseBtn"></button>
      <form action="#" method="POST" id="call" class="feed-form">
        <label for="name">Як до вас звертатись ?</label>
        <input required type="text" name="name" id="name" placeholder="Як вас звати ?" />
        <label for="tel">Ваш номер телефону ?</label>
        <input required type="number" name="phone" id="tel" placeholder="Ваш номер телефону ?" />
        <button type="submit" class="button button_modal">Надіслати форму</button>
      </form>
  `

  document.body.appendChild(modal)
  document.body.appendChild(bcg)
}

export default createModal
