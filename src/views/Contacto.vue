<template>
  <div class="contacto">
    <v-container class="mx-auto">
      <FlechaAtras />
      <h1>Déjame un mensaje</h1>

      <v-form class="contacto__formulario py-10" @submit.prevent="sendMessage">
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <v-text-field
              type="text"
              name="name"
              v-model="name"
              dense
              outlined
              :color="colors.secondDark"
              label="Ingresa tu nombre"
              class="pr-md-3"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              type="email"
              name="email"
              v-model="email"
              dense
              outlined
              :color="colors.secondDark"
              label="Correo electrónico"
              class="pl-md-3"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              type="message"
              name="message"
              v-model="message"
              dense
              outlined
              :color="colors.secondDark"
              label="Déjame un mensaje"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn :color="colors.mainHighlight" type="submit" width="100%"
              >Enviar</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FlechaAtras from "@/components/FlechaAtras";
import firebase from "firebase";
export default {
  components: {
    FlechaAtras,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    ...mapState(["colors"]),
  },
  methods: {
    async sendMessage() {
      try {
        const message = {
          name: this.name,
          email: this.email,
          message: this.message,
          date: new Date().toDateString(),
        };

        await firebase.firestore().collection("comentarios").add(message);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contacto {
  background: $main-light;
  color: $main-dark;
  min-height: 100vh;
  padding-top: 52px;
  &__formulario {
  }
}
</style>