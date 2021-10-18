<template>
<!-- Siempre debe estar todo dentro de un contenedor en este caso un div, de lo contrario no va a funcionar -->
<div id="mi-componente">
    <h1>{{titulo}}</h1>
</div>
</template>

<script>
export default {
    name:'MiComponente',
    data(){
        return{
            titulo:"Titulo componente"
        }
    }
}
</script>