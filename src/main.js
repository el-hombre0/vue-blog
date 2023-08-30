import { createApp } from "vue";
import App from "./App.vue";
import components from '@/components/UI'
import router from "./router/router";
import directives from "@/directives/index"

const app = createApp(App);

// Глобальная регистрация компонентов UI, импорт не нужен
components.forEach(component =>  {
    app.component(component.name, component)
})

// Регистрация сразу нескольких директив
directives.forEach(directive => (
    app.directive(directive.name, directive)
));


app
.use(router)
.mount("#app");
