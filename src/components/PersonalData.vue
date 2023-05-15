<template>
  <div class="personal-data-container">
    <h1>{{ nombrefromstore }}</h1>
    <small>Personal Data component</small>
    <p class="year-container">Tengo <span class="years">{{ edad }}</span> años</p>
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
  computed: {
    nombrefromstore() {
      return this.$store.state.name;
    },
    edad() {
      return this.$store.state.edad;
    },
  },
};
</script>

<style scoped>
.years {
  font-size: 22px;
  font-weight: 600;
}

h1 {
  font-family: 'Dancing Script', cursive;
}

.personal-data-container {
  border: 1px solid black;
  /* Agregado: estilo de borde */
}</style>
