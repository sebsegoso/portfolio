<template>
  <!-- <img v-if="blanco" :src="icons.white.backArrow" alt="volver" @click="$router.go(-1)" class="backArrow" /> -->
  <v-btn class="backArrow" icon @click="$router.go(-1)" :color="color"><v-icon x-large >mdi-arrow-left</v-icon></v-btn>
  <!-- <img v-else :src="icons.gray.backArrow" alt="volver" @click="$router.go(-1)" class="backArrow" /> -->

</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "flechaAtras",  
  props: {
    color:{
      type: String,
      default: '#ee6c4d'
    }
  },
  computed: {
    ...mapState(['colors'])
  },
};
</script>

<style lang="scss" scoped>
.backArrow{
  filter: drop-shadow(0 0 2 #00000015);
  margin-right: 32px;
  &:hover{
    cursor: pointer;
  }
}</style>