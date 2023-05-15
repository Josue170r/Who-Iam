<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Josue.jpg" width="200">
    <HelloWorld msg="Josué Montalbán Rojas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
