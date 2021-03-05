function createArchive(num) {
  const container = document.querySelector('main.container')
  const div = document.createElement('div')
  div.classList.add('img_container')

  for (let i = 1; i < num; i++) {
    const img = document.createElement('img')
    img.setAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhmwB0AIAAAP///wAAACH5BAEAAAEALAAAAACbAHQAAAKkjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxzcUQAAOw=='
    )

    div.appendChild(img)
  }
  container.appendChild(div)

  const imgAttrArray = createImgArray(num)
  const allImg = document.querySelectorAll('main.container img')

  window.onload = () => {
    document.querySelector('body').style.overflow = 'auto'
    document.querySelector('footer').style.opacity = '1'
    document.querySelectorAll('.container').forEach((e) => (e.style.opacity = '1'))
    document.querySelector('.preloader').remove()

    allImg.forEach((img, i) => {
      img.setAttribute('src', imgAttrArray[i].url)
      img.setAttribute('alt', imgAttrArray[i].alt)
    })
  }

  function createImgArray(num) {
    const arr = []

    for (let i = 1; i < num; i++) {
      const obj = {
        url: `assets/img/archive/${i}.jpg`,
        alt:
          'Поисковый датчик | катушка для металлоискателя квазар АРМ | АВР, Фортуна М2, М3, ПРО Снайперка | Концентрическая, ДД | Double D|, Супер Д, Омега, Big Foot | Дифференциал',
      }
      arr.push(obj)
    }

    return arr
  }
}

export default createArchive
