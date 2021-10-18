<template>
  <div class="general">
    <SliderComponent
      texto="Bienvenido al Curso de Vue con Víctor Robles de victorroblesweb.es"
      home="true"
    ></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
          
          <ArticlesComponent :articles="articles"></ArticlesComponent>

          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";
import { Global } from "../Global";

export default {
  name: "LastArticlesComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent,
  },
  mounted(){
    this.getLastsArticles();
  },
  data() {
    return {
      articles: [],
      url: Global.url,
    };
  },
  methods: {
    getLastsArticles() {
      axios.get(this.url + "/articles/last").then((res) => {
        this.articles = res.data.articles;
      });
    },
  },
};
</script>