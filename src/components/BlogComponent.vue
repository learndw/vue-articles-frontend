<template>
  <div class="general">
    <SliderComponent texto="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <!--Listado articulos-->
                <div v-if="articles">
                   
                  <ArticlesComponent :articles="articles"></ArticlesComponent>
                    
                </div>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
//Libreria Axios para peticiones http
import axios from 'axios';
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";
//Importar url global
import { Global } from "../Global";

export default {
  name: "BlogComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  mounted(){
    this.getArticles();
  },
  data(){
    return {
      articles:[]
    }
  },
  methods:{
    getArticles(){
      axios.get(Global.url+'/articles')
      .then(res=>{
        if(res.data.status=='success'){

          this.articles=res.data.articles
        }
      });
    }
  }
};
</script>