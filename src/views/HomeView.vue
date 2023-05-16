<template>
  <div class="home">
    <AvatarComponent></AvatarComponent>
    <HelloWorld msg="Josué Montalbán Rojas" />
  </div>
</template>

<script>
// @ is an alias to /src
import AvatarComponent from '@/components/AvatarComponent.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AvatarComponent,
  },
};
</script>
