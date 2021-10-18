<template>
  <div class="general">
    <SliderComponent :texto="'Busqueda: ' + searchString"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Articulos encontrados</h2>
        <!--Listado articulos-->
        <div v-if="articles">
          <ArticlesComponent :articles="articles"></ArticlesComponent>
        </div>

        <div v-else>No hay articulos disponibles</div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
//Libreria Axios para peticiones http
import axios from "axios";
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";
//Importar url global
import { Global } from "../Global";

export default {
  name: "SearchComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent,
  },
  mounted() {
    //recoger parametro por la url
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      articles: [],
      searchString: null,
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(Global.url + "/search/" + searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>