import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router.js'

import './assets/main.css'

class Main {

    constructor () {

        this.vue = createApp( App )
        this.vue.component( App );
        this.vue.use( createPinia())
            .use( router )
            .mount('#app')
    }
}

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {

    const app = new Main()
})
