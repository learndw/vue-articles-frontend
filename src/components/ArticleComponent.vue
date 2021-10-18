<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <!--Listado articulos-->
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="url + '/get-img/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              src="../assets//images/default.jpg"
              :alt="article.title"
              v-if="!article.image"
            />
          </div>

          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date">{{ article.date | moment("from", "now") }}</span>
          <p>
            {{ article.content }}
          </p>

          <div class="clearfix"></div>
          <router-link :to="'/edit/' + article._id" class="btn btn-warning"
            >Editar</router-link
          >
          <router-link to="/elimianr" class="btn btn-danger"
            >Eliminar</router-link
          >
        </article>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
//Libreria Axios para peticiones http
import axios from "axios";
import SidebarComponent from "./SidebarComponent.vue";
//Importar url global
import { Global } from "../Global";

export default {
  name: "BlogComponent",
  components: {
    SidebarComponent,
  },
  mounted() {
    this.articleId = this.$route.params.id;
    this.getArticle(this.articleId);
  },
  data() {
    return {
      article: null,
      url: Global.url,
      articleId: null,
    };
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "/article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
  },
};
</script>