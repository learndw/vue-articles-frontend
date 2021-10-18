<template>
  <div class="general">
    <SliderComponent texto="Pagina de pruebas"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina</h2>
        <h3>{{ id_dede_url }}</h3>
        <h4>{{ nombre }}</h4>
        <input type="text" v-model="nombre" />
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redireccionBlog()">Ir a blog</button>
        <h2>Directiva conidcionales</h2>
        <input type="number" v-model="edad" />
        Mi edad es {{ edad }}
        <p
          class="alert-danger-provisional"
          v-if="edad && edad >= 18 && edad < 65"
        >
          Eres mayor de edad
        </p>
        <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
          Eres de avanzada edad
        </p>

        <!-- <p class="alert-success-provisional" v-if="edad || edad <18">
      Eres menor de edad
    </p> -->
        <!-- v-else es decirlo contrario del v-if -->
        <p class="alert-success-provisional" v-else>Eres menor de edad</p>

        <h2>Directiva iterativa For</h2>
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
        </ol>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "PaginaComponent",
  components: {
    SliderComponent,
    SidebarComponent,
  },
  //Metodo cuando el componente se crea pero puede que no se cargue del todo se recomienda usar el metodo mounted
  created() {
    console.log("metodo created");
  },
  //El metodo mount se ejecuta nada mas cargar el componente
  mounted() {
    //recoger dato desde la url en este caso el parametro id
    this.id_dede_url = this.$route.params.id;
    console.log("Componente montado");
  },
  //Se ejecuta cada vez que el componente se actualiza
  updated() {
    console.log("componente actualizado");
  },
  //Cuado el componente se elimina por ejempo cambiar de ruta a otro componente
  destroyed() {
    console.log("Componente eliminado");
  },
  //Definir propiedades
  data() {
    return {
      id_dede_url: null,
      nombre: "",
      edad: 18,
      peliculas: ["007", "The Team A", "Superman II"],
    };
  },
  //Propiedad para definir metodos
  methods: {
    actualizarNombre() {
      this.nombre = "Carlos Avila";
    },
    redireccionBlog() {
      this.$router.push("/blog");
    },
  },
};
</script>