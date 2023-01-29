import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router/router.js'

const app = createApp(App)

app.use(router)
app.use(store)
import 'bootstrap/dist/js/bootstrap.js'
import store from './store'
app.mount('#app')
