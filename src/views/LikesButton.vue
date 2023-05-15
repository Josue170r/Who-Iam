<template>
  <div class="about row">
    <h1>{{ nombrefromstore }}</h1>
    <h1>Edad: {{ edad }}</h1>
    <div class="col-md-4 wrapper">
      <img src="../assets/basquet.jpg" alt="basquetbol" width="300">
      <p>{{ text }}</p>
      <p></p>
    </div>
  </div>
</template>

<style>
h1{
  font-family: 'Dancing Script', cursive;
}
p{
  text-align: justify;
  margin: 1px 2px;
  padding: 5px 1px;
}
.wrapper{
    border: 1px solid #000000;
    background-color: #b87af1;
  }

</style>

<script>
export default {
  data() {
    return {
      text: 'Basketball is my favorite sport. I have been playing basketball since I was 8 years old, and I was a part of a team called "Jaguars" for 2 years.',
      text2: 'I Enjoy weightlifting. It helps me reduce stress and allows me to lead a healthier life.',
      text3: 'I really enjoy mathematics. It helps me maintain mental agility and develop my analytical skills.',
    };
  },
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
