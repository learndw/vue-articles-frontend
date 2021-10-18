<template>
    <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            :src="pelicula.image"
            :alt="pelicula.title"
            :title="pelicula.title"
          />
        </div>

        <h2>{{pelicula.title}}</h2>
        <!-- Clase year green se aplica segun condiciones -->
        <span class="date" :class="{yeargreen: pelicula.year >= 2010,yearred: pelicula.year < 2010,}">{{pelicula.year}}</span>
        <a href="#">Leer más</a>
        <input type="button" value="Marcar favorito" @click="pasarFavoritaAlPadre(pelicula)">

        <div class="clearfix"></div>
      </article>
</template>

<script>
export default {
    name:'Peliculas',
    //Obtener variable de componente padre
    props:['pelicula'],
    methods:{
      pasarFavoritaAlPadre(pelicula){
        //Emitir el evento favorita al componente padre
        this.$emit('favorita',pelicula);
      }
    }
}
</script>