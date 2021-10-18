<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>

        <!-- Propiedad computada ejecutada -->
        <div class="mis-datos" v-if="misDatos">
          {{ misDatos | mayusculas | concatYear('Where It all begins again') }}
        </div>
        <!-- Propiedad computada ejecutada con formato html -->
        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatosHtml"></p>
        </div>

        <div class="favorita" v-if="favorita">
          <h2>{{ favorita.title }}</h2>
        </div>
        <!--Listado peliculas-->
        <div id="articles">
          <!-- v-for="pelicula in peliculas" v-bind:key="pelicula.title" -->

          <!-- Propiedad computada ejecutada -->
          <div
            v-for="pelicula in peliculasMayusculas"
            v-bind:key="pelicula.title"
          >
            <!-- Pasar variable pelicula al componente Peliculas -->
            <!-- Obtener el valor emitido desde el componente hijo es decir favorita -->
            <Peliculas
              :pelicula="pelicula"
              v-on:favorita="getFavoritaHijo"
            ></Peliculas>
          </div>
          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import Peliculas from "./Peliculas.vue";

export default {
  name: "PeliculaComponent",
  components: {
    Peliculas,
    SidebarComponent,
  },
  methods: {
    //Obtener el valor enviado desde el componente hijo
    getFavoritaHijo(favorita) {
      this.favorita = favorita;
    },
  },
  //Propiedad computada
  computed: {
    peliculasMayusculas() {
      var peliculasMod = this.peliculas;
      for (let i = 0; i < this.peliculas.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos() {
      return this.nombre + " " + this.apellido + " " + this.job;
    },
    misDatosHtml() {
      return (
        this.nombre +
        " " +
        this.apellido +
        "<hr><strong>" +
        this.job +
        "</strong>"
      );
    },
  },
  //Filtros
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    //Mas de un valor
    concatYear(value,message) {
      var date = new Date();
      var full_year = date.getFullYear();
      return value + " " + full_year+' Mensaje: '+message;
    },
  },
  data() {
    return {
      favorita: null,
      nombre: "Andres",
      apellido: "Avila",
      job: "Web developer",
      peliculas: [
        {
          title: "Superman II",
          year: 1980,
          image: "https://i.blogs.es/128da8/superman-2-cartel/1366_2000.jpg",
        },
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2020-06/Batman-vs.-Superman6.jpg?itok=86zFo65N",
        },
        {
          title: "El codigo Davinci",
          year: 2004,
          image: "https://i.ytimg.com/vi/y9gZAWi5YZA/sddefault.jpg",
        },
      ],
    };
  },
};
</script>