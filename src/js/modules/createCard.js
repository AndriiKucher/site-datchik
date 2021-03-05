function createCard(massive) {
  massive.forEach((obj) => {
    if (obj.container === '#accessories .card-container') {
      let container = document.querySelector(obj.container)
      let newItem = document.createElement('li')

      newItem.classList.add('card')
      newItem.innerHTML = `
        <div class="card__img">
        <img src="${obj.img}" alt="${obj.alt}"/>
        </div>
        <div class="card__descr">
          <h3>${obj.title}</h3>
          <ul class="card__list">
            <li>
              <div><b>Довжина:</b>${obj.cable}</div>
            </li>
            <li>
              <div><b>Штекер:</b>${obj.plug}</div>
            </li>
            <li>
              <div>${obj.descr}</div>
            </li>
          </ul>
        </div>
        `
      container.appendChild(newItem)
    } else {
      let container = document.querySelector(obj.container)
      let newItem = document.createElement('li')

      newItem.classList.add('card')
      newItem.innerHTML = `
        <div class="card__img">
        <img src="${obj.img}" alt="${obj.alt}"/>
        </div>
        <div class="card__descr">
          <h3>${obj.title}</h3>
          <ul class="card__list">
            <li>
              <div><b>Розмір:</b>${obj.size}</div>
            </li>
            <li>
              <div><b>Вага:</b>${obj.weight}</div>
            </li>
            <li>
              <div><b>Частота:</b>${obj.frequency}</div>
            </li>
            <li>
              <div><b>Екран датчика:</b>${obj.screenSensor}</div>
            </li>
            <li>
              <div><b>Кабель:</b>${obj.cable}</div>
            </li>
            <li>
              <div><b>Штекер:</b>${obj.plug}</div>
            </li>
          </ul>
        </div>
        `
      container.appendChild(newItem)
    }
  })
}

export default createCard
