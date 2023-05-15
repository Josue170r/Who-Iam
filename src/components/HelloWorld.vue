<template>
  <div class="hello">
    <h1>Mi nombre desde el store: {{ nombrefromstore }}</h1>
    <h2>Tengo {{ edad }} años</h2>
    <p>Este es mi elemento desde el store</p>
    <p>{{ longParagraph }}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      longParagraph: 'My name is Josué Montalbán Rojas, I am 20 years old, and I am currently in the 5th semester of the Computer Systems Engineering program at the Superior School of Computing (ESCOM). I live in Iztapalapa, near CecyT 7, and it takes me approximately 2 hours to commute to school every day. I really enjoy my major, except for the time it takes me to get to school. I live with my mom and my grandma.',
    };
  },
  computed: {
    miComputed() {
      const suma = 10 + 10;
      return `Este es mi elemento computado ${suma}`;
    },
    nombrefromstore() {
      return this.$store.state.name;
    },
    edad() {
      return this.$store.state.edad;
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello p{
  text-align: justify;
  margin: 30px 250px;
}
h1{
  font-family: 'Dancing Script', cursive;
}
h2{
  font-family: sans-serif;
}
</style>
