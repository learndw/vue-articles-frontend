<template>
  <div>
    <div class="articles-list" v-if="articles && articles.length >= 1">
      <article
        class="article-item"
        v-for="article in articles"
        :key="article._id"
      >
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

        <h2>
          <router-link :to="{ name: 'article', params: { id: article._id } }">
            {{ article.title }}
          </router-link>
        </h2>
        <span class="date">
          {{ article.date | moment("from", "now") }}
        </span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length < 1">No hay Articulos</div>
    <div v-else>Cargando..</div>
  </div>
</template>

<script>
import { Global } from "../Global";
export default {
  name: "ArticlesComponent",
  props: ["articles"],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>
