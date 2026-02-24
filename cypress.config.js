import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  // e2e configuration goes here :
  e2e: {
    baseUrl: "https://playground.bondaracademy.com/pages/iot-dashboard",
    setupNodeEvents(on, config) {
      // implement node event listeners here :
    },
  },
  // global configuration goes here :
  viewportWidth: 1280,
  viewportHeight: 720,
});
