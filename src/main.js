import { createApp } from "vue";
import App from "./App.vue";
import components from '@/components/UI'
import router from "./router/router";

const app = createApp(App);

// Глобальная регистрация компонентов UI, импорт не нужен
components.forEach(component =>  {
    app.component(component.name, component)
})



app
.use(router)
.mount("#app");
