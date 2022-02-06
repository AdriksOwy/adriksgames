<template>
  <div class="not-found">
    <h1>{{ number }}</h1>
    <p>{{ not_found }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 404,
      not_found: "Page not found!",
    };
  },
};
</script>
