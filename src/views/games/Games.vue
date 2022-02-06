<template>
  <div class="games">
    <div class="header-games">
      <router-link :to="{ name: 'Home' }">
        <i class="fas fa-chevron-circle-left"></i>
      </router-link>
      <h1>{{ header }}</h1>
    </div>
    <div v-if="games.length" class="games-container">
      <div v-for="game in games" :key="game.id" class="game-item">
        <div class="game-item-container">
          <router-link :to="{ name: 'GameDetails', params: { id: game.id } }">
            <img :src="game.img" :alt="game.title" />
            <h1>{{ game.name }}</h1>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="loading-games">
      <p>{{ loading }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [],
      header: "All Games",
      loading: "Loading games...",
    };
  },
  mounted() {
    const json = require("../../../data/db.json");

    this.games = json.games;
  },
};
</script>
