import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { revealDirective } from "./directives/reveal";
import "./styles/main.scss";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/michroma/400.css";

const app = createApp(App);
app.use(router);
app.directive("reveal", revealDirective);
app.mount("#app");

const fontsToLoad = [
  document.fonts.load('400 1rem "Michroma"'),
  document.fonts.load('500 1rem "Poppins"'),
];

const hideLoader = () => {
  const el = document.getElementById("initial-loader");
  if (!el) return;
  el.classList.add("fade-out");
  window.dispatchEvent(new Event("page-loaded"));
  setTimeout(() => el.remove(), 300);
};

Promise.race([
  Promise.all(fontsToLoad).catch(() => {}),
  new Promise((resolve) => setTimeout(resolve, 8000)),
]).then(hideLoader);
