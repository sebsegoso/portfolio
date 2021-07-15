<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    ...mapActions("Proyectos", ["getProjects"]),
    ...mapActions("Mailing", ["newMessageNotification"]),
  },
  computed: {
    ...mapState("Proyectos", ["projects"]),
  },
  created() {
    this.getProjects();
    // this.newMessageNotification('probanding');
  },
};
</script>

<style lang="scss">
</style>
