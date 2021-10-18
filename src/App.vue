<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
  
      <!-- <LastArticlesComponent></LastArticlesComponent> -->
      <!-- Llamar a las rutas en Vue en SPA -->
      <router-view></router-view>
      
   
      <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
//import LastArticlesComponent from "./components/LastArticlesComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  //Importar todos los componentes creados en el modulo
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
/* Importar Estilos CSS desde Vue en el componente principal */
@import "./assets/css/styles.css";
</style>