<template>
  <v-dialog
    v-model="dialogProyecto"
    fullscreen
    transition="scroll-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-img
              v-if="proyecto.img"
              :src="proyecto.img[0]"
              alt="imagen proyecto"
              max-height="300"
              class="rounded-xl project_img"
              position="top"
            >
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  :color="colors.mainHighlight"
                  absolute
                  class="text-center"
                >
                  <h3>{{ proyecto.name }}</h3>
                  <h4>{{ proyecto.type }}</h4>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </template>
        </v-hover>
      </div>
    </template>
    <v-sheet height="100vh">
      <div class="dialogProject pa-5 pt-0">
        <v-container
          class="dialogProject__header py-5 d-flex justify-space-between align-center"
        >
          <div>
            <h1>{{ proyecto.name }}</h1>
            <h3>
              {{ proyecto.type }}
              <span v-if="proyecto.startDate === proyecto.endDate"
                >({{ proyecto.startDate }})</span
              >
              <span v-else
                >({{ proyecto.startDate }} - {{ proyecto.endDate }})</span
              >
            </h3>
          </div>

          <v-btn
            @click="dialogProyecto = false"
            fab
            :color="colors.mainHighlight"
            dark
            >X</v-btn
          >
        </v-container>

        <v-container class="dialogProject__details">
          <h2 class="pb-3">Especificaciones del proyecto</h2>
          <p v-for="(desc, i) of description" :key="i">{{ desc }}</p>
          <!-- datos técnicos -->
          <v-row no-gutters>
            <v-col cols="12">
              <h3 class="pb-1">Detalles técnicos</h3>
              <ul class="dialogProject__details__techList pb-5">
                <li>
                  Framework Javascript:
                  <ul>
                    <li>{{ proyecto.framework }}</li>
                  </ul>
                </li>
                <li>
                  Base de datos:
                  <ul>
                    <li v-for="(db, i) of proyecto.tech.database" :key="i">
                      {{ db }}
                    </li>
                  </ul>
                </li>
                <li>
                  UI frameworks:
                  <ul>
                    <li v-for="(ui, i) of proyecto.tech.ui" :key="i">
                      {{ ui }}
                    </li>
                  </ul>
                </li>
              </ul>
            </v-col>
            <!-- Caracteristicas -->
            <!-- <v-col cols="12" md="7" lg="8">
              <h3 class="pb-1">Características proyecto</h3>
              <ul class="pb-5">
                <li>asdas</li>
              </ul>
            </v-col> -->
          </v-row>
          <v-row class="py-6">
            <v-col v-if="proyecto.urlDemo">
              <v-btn
                width="100%"
                :color="colors.mainHighlight"
                :href="proyecto.urlDemo"
                target="_blank"
                dark
                ><v-icon>mdi-application</v-icon> Ver demo
              </v-btn>
            </v-col>

            <v-col v-if="proyecto.urlRepo">
              <v-btn
                width="100%"
                :color="colors.secondDark"
                :href="proyecto.urlRepo"
                target="_blank"
                dark
                ><v-icon>mdi-github</v-icon> Ver repositorio
              </v-btn>
            </v-col>
          </v-row>
          <!-- Carousel img -->
          <v-carousel
            cycle
            show-arrows-on-hover
            hide-delimiter-background
            height="80vh"
          >
            <v-carousel-item v-for="(img, i) of proyecto.img" :key="i">
              <!-- <v-dialog v-model="dialogImg">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <v-img :src="img" />
                  </div>
                </template>
                <v-sheet class="imgDialog">
                  <div
                    class="imgDialog__header d-flex justify-space-between align-center"
                  >
                    <h4>{{ proyecto.name }}</h4>
                    <v-btn
                      @click="dialogImg = false"
                      :color="colors.mainHighlight"
                      dark
                      small
                      >X</v-btn
                    >
                  </div> -->
                  <v-img :src="img" />
                <!-- </v-sheet>
              </v-dialog> -->
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PopupProyecto",
  props: {
    proyecto: {
      required: true,
    },
  },
  data() {
    return {
      dialogProyecto: false,
      dialogImg: false,
      verDemo: false,
    };
  },
  computed: {
    ...mapState(["colors"]),
    viewportWidth() {
      return "100%";
    },
    description() {
      return this.proyecto.description.split(".  ").map((d) => `${d}.`);
    },
  },
};
</script>

<style lang="scss" scoped>
.project_img {
  filter: grayscale(70%);
  transition: filter 0.3s ease;
  &:hover {
    filter: none;
  }
}

.dialogProject {
  background: $main-dark;
  color: $main-light;
  min-height: 100vh;
  &__header {
    position: sticky;
    top: 0;
    background: $main-dark;
    z-index: 1;
  }
  &__details {
  }
}

.imgDialog {
  position: relative;
  &__header {
    position: sticky;
    background: $main-light;
    color: $main-dark;
    min-height: 45px;
    top: 0;
    z-index: 2;
  }
}
</style>