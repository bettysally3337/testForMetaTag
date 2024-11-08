<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} -yay!</template>
  </metainfo>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/testone">testOne</router-link>
  </nav>

  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <router-view />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  setup() {
    useMeta({
      title: "Lexi Example using vue-meta",
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
      meta: [
        { property: "og:title", content: "Home" },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://20241108opengraph.netlify.app",
        },
      ],
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
