<template>
  <div>
    <button @click="addAge">
      Aumentar edad +
    </button>
    <button @click="removeAge">
      Quitar edad +
    </button>
    <button @click="changeNameMutation">
      CambiarNombre
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MyChangeButton',
  methods: {
    ...mapMutations({
      addAgeMutations: 'addAgeMutations',
    }),
    addAge() {
      console.log('Llamando mutación del store');
      this.addAgeMutations(1);
    },
    removeAge() {
      this.$store.commit('remoteAgeMutation', 1);
    },
  },
};
</script>
