<template>
  <v-app>
    <v-container>
      <TagList :tags="tags" alignment="left" />
      <TagList :tags="tags" alignment="justify" />
      <div class="app-container">
        <TagList :tags="tags" alignment="left" />
      </div>
      <div class="app-container inline-block">
        <TagList :tags="tags" alignment="justify" />
      </div>
    </v-container>
  </v-app>
</template>

<script>
import TagList from "./components/TagList.vue";

export default {
  name: "App",
  components: {
    TagList,
  },
  data() {
    return {
      tags: [
        { text: "текст" },
        { text: "больше текста", icon: "mdi-heart" },
        { text: "ещё больше текста" },
        { text: "Капибара", icon: "mdi-star" },
        { text: "Капибарная капибара" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
