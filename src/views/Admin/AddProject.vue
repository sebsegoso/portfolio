<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            outlined
            :color="mainColor"
            v-model="project.name"
            label="Nombre proyecto"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            outlined
            :color="mainColor"
            v-model="project.type"
            label="Tipo de proyecto"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            outlined
            :color="mainColor"
            v-model="project.urlDemo"
            label="URL Demo"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            outlined
            :color="mainColor"
            v-model="project.urlRepo"
            label="URL repositorio"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            dense
            outlined
            label="Descripción"
            :color="mainColor"
            v-model="project.description"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            dense
            outlined
            label="Framework Javascript"
            :color="mainColor"
            v-model="project.framework"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-date-picker
            full-width
            no-title
            show-adjacent-months
            type="month"
            :max="new Date().toISOString().slice(0, 10)"
            label="fecha"
            dense
            outlined
            :color="mainColor"
            v-model="fecha"
            first-day-of-week="1"
            locale="es"
            range
          ></v-date-picker>
        </v-col>

        <v-col cols="12" md="6">
          <v-row no-gutters>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-text-field
                dense
                outlined
                :color="mainColor"
                v-model="img"
                label="img"
                @keyup.enter="addImg"
              ></v-text-field>
              <v-btn
                fab
                x-small
                dark
                @click="addImg"
                :color="mainColor"
                class="mb-7 ml-2"
                >+</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <ul>
                <li
                  v-for="(img, i) of project.img"
                  :key="i"
                  class="d-flex align-center pb-2"
                >
                  <img :src="img" height="40" /><v-btn
                    fab
                    x-small
                    dark
                    @click="project.img.splice(i, 1)"
                    color="red"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  >
                </li>
              </ul>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-text-field
                dense
                outlined
                :color="mainColor"
                v-model="detalle"
                label="Detalles"
                @keyup.enter="addDetalle"
              ></v-text-field>
              <v-btn
                fab
                x-small
                dark
                @click="addDetalle"
                :color="mainColor"
                class="mb-7 ml-2"
                >+</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <ul>
                <li
                  v-for="(detalle, i) of project.projectDetails"
                  :key="i"
                  class="d-flex align-center pb-2"
                >
                  {{ detalle }}
                  <v-btn
                    fab
                    x-small
                    dark
                    color="red"
                    @click="project.projectDetails.splice(i, 1)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </li>
              </ul>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-text-field
                dense
                outlined
                :color="mainColor"
                v-model="databaseItem"
                label="Base de datos"
                @keyup.enter="addDb"
              ></v-text-field>
              <v-btn
                fab
                x-small
                dark
                @click="addDb"
                :color="mainColor"
                class="mb-7 ml-2"
                >+</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <ul>
                <li
                  v-for="(db, i) of project.tech.database"
                  :key="i"
                  class="d-flex align-center pb-2"
                >
                  {{ db }}
                  <v-btn
                    fab
                    x-small
                    dark
                    color="red"
                    @click="project.tech.database.splice(i, 1)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </li>
              </ul>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-text-field
                dense
                outlined
                :color="mainColor"
                v-model="uiItem"
                label="UI Frameworks"
                @keyup.enter="addUi"
              ></v-text-field>
              <v-btn
                fab
                x-small
                dark
                @click="addUi"
                :color="mainColor"
                class="mb-7 ml-2"
                >+</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <ul>
                <li
                  v-for="(ui, i) of project.tech.ui"
                  :key="i"
                  class="d-flex align-center pb-2"
                >
                  {{ ui }}
                  <v-btn
                    fab
                    x-small
                    dark
                    color="red"
                    @click="project.tech.ui.splice(i, 1)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" md="6" class="d-flex align-center">
              <v-text-field
                dense
                outlined
                :color="mainColor"
                v-model="extraItem"
                label="Extra"
                @keyup.enter="addExtra"
              ></v-text-field>
              <v-btn
                fab
                x-small
                dark
                @click="addExtra"
                :color="mainColor"
                class="mb-7 ml-2"
                >+</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <ul>
                <li
                  v-for="(extra, i) of project.tech.extra"
                  :key="i"
                  class="d-flex align-center pb-2"
                >
                  {{ extra }}
                  <v-btn
                    fab
                    x-small
                    dark
                    color="red"
                    @click="project.tech.extra.splice(i, 1)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      @click="addProject"
      dark
      rounded
      width="100%"
      class="mt-6"
      :color="mainColor"
      >Agregar proyecto</v-btn
    >
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import moment from "moment";
import firebase from "firebase";

export default {
  name: "AgregarProyecto",
  data() {
    return {
      project: {
        name: "",
        type: "",
        description: "",
        endDate: "",
        framework: "Vue Js",
        urlDemo: "",
        urlRepo: "",
        img: [],
        projectDetails: [],
        startDate: "",
        tech: {
          database: [],
          ui: ["Sass", "Vuetify"],
          extra: [],
        },
      },
      fecha: [],
      img: "",
      detalle: "",
      databaseItem: "",
      uiItem: "",
      extraItem: "",
    };
  },
  methods: {
    async addProject() {
      this.ajustarFecha();
      try {
        await firebase.firestore().collection("proyectos").add(this.project);
        alert("Proyecto cargado en firebase");
      } catch (error) {
        alert(error.message);
      }

      console.log(this.project);
    },
    ajustarFecha() {
      let fecha = this.fecha;
      const fechaUno = fecha[0];
      const fechaDos = fecha[1];
      moment(fechaUno).isAfter(moment(fechaDos))
        ? (fecha = fecha.reverse())
        : false;

      this.project.startDate = fecha[0];
      this.project.endDate = fecha[1];
    },
    addImg() {
      this.project.img.push(this.img);
      this.img = "";
    },
    addDetalle() {
      this.project.projectDetails.push(this.detalle);
      this.detalle = "";
    },
    addDb() {
      this.project.tech.database.push(this.databaseItem);
      this.databaseItem = "";
    },
    addUi() {
      this.project.tech.ui.push(this.uiItem);
      this.uiItem = "";
    },
    addExtra() {
      this.project.tech.extra.push(this.extraItem);
      this.extraItem = "";
    },
  },
  computed: {
    ...mapState(["colors"]),
    mainColor() {
      return this.colors.secondDark;
    },
  },
  title() {
    return `Agregar experiencia - HummingBird`;
  },
};
</script>

<style>
</style>