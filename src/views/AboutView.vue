<template>
  <div class="about row">
    <h1>My Interests</h1>
    <div class="col-md-4 wrapper">
      <img src="../assets/basquet.jpg" alt="basquetbol" width="300">
      <p>{{ text }}</p>
      <p></p>
    </div>
    <div class="col-md-4 wrapper">
      <img src="../assets/gym.webp" alt="basquetbol" width="300">
      <p>{{ text }}</p>
      <p></p>
    </div>
    <div class="col-md-4 wrapper">
      <img src="../assets/math.jpg" alt="basquetbol" width="220">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style>
h1{
  font-family: 'Dancing Script', cursive;
}
p{
  text-align: justify;
  margin: 30px 30px
}
.wrapper{
    border: 1px solid #000000;
    padding: 10px;
    background-color: #b87af1;
  }

</style>

<script>
export default {
  data() {
    return {
      text: 'Basketball is my favorite sport. I have played basketball since I was 8 years old, and I was part of a team called "Jaguars" for 2 years.',
    };
  },
};
</script>
