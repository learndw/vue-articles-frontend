<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
    <h3>{{texto}}</h3>
   
    <MiComponente></MiComponente>
    <MiComponente></MiComponente>
  </div>
</template>

<script>
import MiComponente from "./MiComponente.vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //Hay como llamar componentes de uno a otro solo hay que importarlos
  components: {
    MiComponente
  },
  //propiedades a motrar en la vista
  data(){
    return{
      texto:"Texto de prueba para funcionamiento"
    }
  }
}
</script>

