<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
</style>
