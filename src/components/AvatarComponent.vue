<template>
  <div class="mb-3">
    <img class="avatar" alt="Img-avatar" :src="AvatarComputed" />
    <br>
    <label for="select-container">
      Selecciona una imagen:
      <select
        v-model="imgAvatarOption"
        class="select-images-avatar"
        @change="onChangeSelectImageAvatar()"
        >
        <option disabled default>Seleccione una opción</option>
        <option v-for="(image, i) in avatarImages" :key="i" :value="image">
          {{image.title}}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  data() {
    return {
      imgAvatarOption: null,
    };
  },
  computed: {
    AvatarComputed() {
      return this.$store.state.useravatar;
    },
    avatarImages() {
      return this.$store.state.imagenesDisponibles;
    },
  },
  methods: {
    onChangeSelectImageAvatar() {
      this.$store.commit('updateUserAvatarMutation', this.imgAvatarOption.url);
    },
  },
};
</script>

<style scoped>
.avatar {
  margin-bottom: 10px;
  border-radius: 50%;
  width: 200px;
}
</style>
