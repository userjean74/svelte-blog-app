
import { mount } from "svelte";
import App from "./App.svelte";
import "./app.css";

// Get the application mounting element
const target = document.getElementById("app");

// Check that the element exists
if (!target) {
  throw new Error('Unable to find the "#app" element in index.html');
}

// Mount the Svelte application
const app = mount(App, {
  target
});

export default app;
