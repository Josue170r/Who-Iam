import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    names: [
      'Josué Montalbán',
      'Josué Rojas',
      'Rufina Flores',
      'Jaqui Ortiz',
      'Pedro Martínez',
    ],
    useravatar: 'https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg',
    imagenesDisponibles: [
      {
        id: 12,
        title: 'Imagen 1',
        url: 'https://e7.pngegg.com/pngimages/1012/711/png-clipart-pokxe9mon-go-video-game-ico-icon-lovely-elf-avatar-love-game-thumbnail.png',
      },
      {
        id: 20,
        title: 'Imagen 2',
        url: 'https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg',
      },
      {
        id: 31,
        title: 'Imagen 3',
        url: 'https://previews.123rf.com/images/yupiramos/yupiramos1707/yupiramos170715915/82083101-avatar-hombre-icono-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o-colorido.jpg',
      },
      {
        id: 45,
        title: 'Imagen 4',
        url: 'https://img.favpng.com/15/19/18/computer-icons-ninja-favicon-iconfinder-avatar-png-favpng-Jku9r1TGGY4Ha6BLUXz1eL3DQ.jpg',
      },
    ],
    edad: 20,
    currentNameIndex: 0,
  },
  mutations: {
    addAgeMutations(state, age) {
      state.edad += age;
    },
    remoteAgeMutation(state, age) {
      state.edad -= age;
    },
    updateUserAvatarMutation(state, userAvatar) {
      state.useravatar = userAvatar;
    },
  },
});
