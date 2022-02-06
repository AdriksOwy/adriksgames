<template>
  <footer>
    <a
      href="https://www.instagram.com/adriksowy/"
      target="_blank"
      class="instagram"
    >
      <i class="fab fa-instagram"></i>
      <span>{{ instagram }}</span>
    </a>
    <a href="https://github.com/AdriksOwy" target="_blank" class="github">
      <i class="fab fa-github"></i>
      <span>{{ github }}</span>
    </a>
    <a
      href="https://www.youtube.com/c/AdriksOwy"
      target="_blank"
      class="youtube"
    >
      <i class="fab fa-youtube"></i>
      <span>{{ youtube }}</span>
    </a>
    <a href="https://discord.gg/bAnv6FHTJ8" target="_blank" class="discord">
      <i class="fab fa-discord"></i>
      <span>{{ discord }}</span>
    </a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      instagram: "AdriksOwy",
      github: "AdriksOwy",
      youtube: "AdriksOwy",
      discord: "Adriks#1421",
    };
  },
};
</script>
