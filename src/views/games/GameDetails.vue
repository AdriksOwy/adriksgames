<template>
  <div v-if="game" class="game-information">
    <h1>{{ game.name }}</h1>
    <p>{{ game.description }}</p>
    <a :href="game.href" target="_blank">{{ dl }}</a>
  </div>
  <div v-else class="loading-games">
    <p>{{ loading }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      game: null,
      dl: "Download",
      loading: "Loading information about game...",
    };
  },
  mounted() {
    const json = require("../../../data/db.json");

    json.games.forEach((game) => {
      if (this.id == game.id) {
        this.game = game;
      }
    });
  },
};
</script>
