import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faHiking,
  faPhotoVideo,
  faVideo,
  faFilm,
  faCamera,
  faCameraRetro,
  faMountain,
  faRoute,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faFacebook,
  faLinkedin,
  faHiking,
  faPhotoVideo,
  faVideo,
  faFilm,
  faCamera,
  faCameraRetro,
  faMountain,
  faRoute,
  faMapMarkedAlt
)
export default function (Vue, {
  head,
}) {
  Vue.use(VueScrollTo)
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap'
  })
}
