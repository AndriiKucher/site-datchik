import { concentric, dd, sd, omega, bigFoot, accessories } from './goodsMassive'
import createCard from './modules/createCard'
import weather from './modules/weather'
import toggleTabs from './modules/toggleTabs'
import setAsideSticky from './modules/setAsideSticky'
import ShowHideModal from './modules/modal'
import createArchive from './modules/createArchive'
import forms from './modules/forms'
import createModal from './modules/createModal'
import activeMenu from './modules/activeMenu'
import changeLanguage from './modules/changeLanguage'
import createPreloader from './modules/createPreloader'
// import './scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  'use strict'
  weather()
  createPreloader()
  createModal()
  try {
    ShowHideModal()
  } catch {}

  forms()
  try {
    createCard(concentric)
    createCard(dd)
    createCard(sd)
    createCard(omega)
    createCard(bigFoot)
    createCard(accessories)
  } catch {}

  if (window.location.pathname === '/archive.html') {
    createArchive(667)
  }

  toggleTabs()
  activeMenu()

  changeLanguage()
})

window.onload = () => {
  document.querySelector('body').style.overflow = 'auto'
  document.querySelectorAll('.container').forEach((e) => (e.style.opacity = '1'))
  document.querySelector('footer').style.opacity = '1'
  document.querySelector('.preloader').remove()

  try {
    setAsideSticky()
  } catch {}
}
