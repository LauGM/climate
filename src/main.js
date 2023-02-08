import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTemperatureHalf, faMagnifyingGlass, faHeartCirclePlus,faHeartCircleMinus, faSun, faCloudSun, faCloudShowersHeavy,faCloudSunRain, faCloud } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add( faTemperatureHalf, faMagnifyingGlass, faHeartCirclePlus,faHeartCircleMinus, faSun, faCloudSun, faCloudShowersHeavy,faCloudSunRain, faCloud)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia())
.mount('#app')

