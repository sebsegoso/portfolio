<template>
  <div class="home">
    <!-- Header -->
    <header
      class="home__header py-10 d-flex flex-column justify-space-around align-center"
    >
      <v-container class="text-center">
        <div class="home__header__profile mx-auto pa-10 rounded-xl">
          <img
            class="home__header__img"
            src="https://lh3.googleusercontent.com/a-/AOh14Gixz-2cTwyRK_iY29Md3FFyG5XgYvxONIU7xWvVsg=s96-c"
            alt=""
          />
          <h1 class="home__header__nombre">Sebastián Segura Osorio</h1>
          <h2 class="home__header__profesion">Desarrollador Front-end</h2>
          <h4 class="mb-6"><v-icon>mdi-map-marker</v-icon> Santiago, Chile.</h4>
          <h3 class="pt-5">Encuéntrame en:</h3>
          <div
            class="home__header__contactme pb-5 d-flex flex-column flex-md-row justify-md-center align-md-center"
          >
            <a href="https://github.com/sebsegoso" target="_blank"
              ><v-icon x-large>mdi-github</v-icon>/sebsegoso</a
            >
            <a href="https://www.linkedin.com/in/sebastian-s-o/" target="_blank"
              ><v-icon x-large>mdi-linkedin</v-icon>/sebastian-s-o</a
            >
            <!-- <a href="mailto:sseguraosorio@gmail.com" target="_blank"
              ><v-icon x-large>mdi-gmail</v-icon>sseguraosorio</a
            > -->
          </div>
          <v-btn
            dark
            :color="colors.mainHighlight"
            width="100%"
            :to="{ name: 'Contacto' }"
            >Déjame un mensaje</v-btn
          >
        </div>
      </v-container>

      <a href="#Descripcion">
        <v-icon x-large class="home__header__downIcon"
          >mdi-arrow-down-circle-outline</v-icon
        >
      </a>
    </header>

    <!-- Breve descripcion -->
    <section
      class="home__descripcion py-10 d-flex align-center justify-center"
      id="Descripcion"
    >
      <v-container>
        <p>
          Soy un apasionado por la cálidad final de mi trabajo , la atención a
          los detalles y pensar en los distintos casos de uso de lo que
          construyo es mi vocación. Ir por nuevos desafíos es lo que me mueve a
          diario, me gusta y me intereso por aprender cosas nuevas.
        </p>
      </v-container>
    </section>

    <!-- Información técnica -->
    <section class="home__tecnologias py-10">
      <v-container class="mx-auto">
        <h2 class="text-center pb-6">Mis habilidades técnicas</h2>
        <v-row no-gutters>
          <v-col cols="12" md="4" class="home__lenguajes px-4 pb-5">
            <h3 class="pb-5 text-center">Lenguajes:</h3>
            <v-row class="text-center text-md-left">
              <v-col cols="4" md="12">
                <v-icon x-large>mdi-language-html5</v-icon>
                <span class="d-block d-md-inline font-weight-bold">HTML</span>
              </v-col>
              <v-col cols="4" md="12">
                <v-icon x-large>mdi-language-css3</v-icon>
                <span class="d-block d-md-inline font-weight-bold">CSS</span>
              </v-col>
              <v-col cols="4" md="12">
                <v-icon x-large>mdi-language-javascript</v-icon>
                <span class="d-block d-md-inline font-weight-bold"
                  >Javascript</span
                >
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4" class="home__frameworks px-4 pb-5">
            <h3 class="pb-5 text-center">Frameworks y herramientas:</h3>
            <v-row>
              <v-col cols="12">
                <h4>Framework javascript:</h4>
                <h4><v-icon x-large>mdi-vuejs</v-icon>Vue Js</h4>
                <p>Uso de Vue CLI, módulos en vuex, vue router.</p>
              </v-col>

              <v-col cols="12">
                <h4>Pre-procesador CSS:</h4>
                <h4><v-icon x-large>mdi-sass</v-icon>Sass</h4>
                <p>Uso de variables, anidamiento, mixins, patrón 7-1, etc.</p>
              </v-col>

              <v-col cols="12">
                <h4>UI Frameworks:</h4>
                <div class="d-flex align-center">
                  <h4 class="pr-5">
                    <v-icon x-large>mdi-vuetify</v-icon>Vuetify
                  </h4>
                  <h4 class="pr-5">
                    <v-icon x-large>mdi-bootstrap</v-icon>Bootstrap
                  </h4>
                </div>
              </v-col>

              <v-col cols="12">
                <h4>Servicios para desarrolladores:</h4>
                <h4><v-icon x-large>mdi-firebase</v-icon>Firebase</h4>
                <p>Uso de Firestore, Authentication, Storage, Hosting, etc.</p>
              </v-col>

              <v-col cols="12">
                <h4>Control de versiones:</h4>
                <div class="d-flex align-center">
                  <div class="d-flex align-center pr-5">
                    <v-icon x-large>mdi-git</v-icon>
                    <h4>Git</h4>
                  </div>
                  <div class="d-flex align-center pr-5">
                    <v-icon x-large>mdi-github</v-icon>
                    <h4>Github</h4>
                  </div>
                </div>
              </v-col>

              <v-col cols="12">
                <h4>Gestión de paquetes:</h4>
                <div class="d-flex align-center">
                  <div class="d-flex align-center pr-5">
                    <v-icon x-large>mdi-npm</v-icon>
                    <h4>NPM</h4>
                  </div>
                  <div class="d-flex align-center pr-5">
                    <h4>YARN</h4>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4" class="home__adicional px-4 pb-5">
            <h3 class="pb-5 text-center">
              Habilidades y conocimientos adicionales:
            </h3>
            <ul>
              <li><v-icon>mdi-console</v-icon> Uso de consola</li>
              <li>Responsive web-design utilizando metodología mobile first</li>
              <li>
                Atención a los detalles para mejorar la experiencia de los
                usuarios
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- proyectos -->
    <section class="home__proyectos py-10">
      <v-container class="mx-auto">
        <h2 class="text-center pb-6">Algunos de mis proyectos</h2>
        <v-row>
          <v-col
            cols="12"
            md="6"
            xl="4"
            v-for="project of proyectos"
            :key="project.id"
          >
            <DetallesProyecto :proyecto="project" />
          </v-col>
          <v-col cols="12" class="text-center">
            <h4>
              Para más proyectos visita mi
              <a href="https://github.com/sebsegoso" target="_blank"
                ><v-icon>mdi-github</v-icon>Github</a
              >
            </h4>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueAos from "vue-aos";
import moment from "moment";
import DetallesProyecto from "@/components/PopUps/DetallesProyecto";

export default {
  name: "Home",
  components: { VueAos, DetallesProyecto },
  computed: {
    ...mapState(["colors"]),
    ...mapState("Proyectos", ["projects"]),
    proyectos() {
      const ordenarPorFecha = (a, b) => {
        if (a.endDate > b.endDate) {
          return 1;
        }
        if (a.endDate < b.endDate) {
          return -1;
        }
        return 0;
      };

      return this.projects.sort(ordenarPorFecha).reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $main-light;
  color: $main-dark;
  i {
    color: $main-highlight;
  }
  a {
    transition: filter 0.3s;
    &:hover {
      filter: drop-shadow(0 0 5px $second-light);
    }
  }

  &__header {
    height: 100vh;
    background: linear-gradient($main-light, $second-dark);
    &__profile {
      background: linear-gradient($second-light, $main-light);
      width: fit-content;
    }
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 18px;
    }
    &__img {
      border-radius: 50%;
      width: 50%;
      max-width: 300px;
      border: 8px solid $main-light;
    }
    &__contactme {
      a {
        padding: 0 16px 20px 16px;
      }
    }
    &__downIcon {
      animation-name: upAndDownMove;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease;
    }
  }
  &__descripcion {
    min-height: 30vh;
    background: $main-dark;
    color: $main-light;
    font-size: 20px;
    .container {
      padding: 40px 0;
      border-top: 1px solid $main-highlight;
      border-bottom: 1px solid $main-highlight;
    }
  }
  &__tecnologias {
    min-height: 40vh;
    background: $second-dark;
    color: $main-light;
  }
  &__frameworks {
    p {
      font-weight: 300;
    }
  }
  &__proyectos {
    min-height: 40vh;
    background: $second-light;
    color: $main-dark;
  }
}

@media (min-width: 960px) {
  .home {
    &__header {
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
      }
      &__img {
        border: 16px solid $main-light;
      }
    }
  }
}
</style>