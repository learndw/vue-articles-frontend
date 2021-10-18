<template>
    <h1>Redirigiendo</h1>
</template>
<script>

export default{
    name:'RedirectComponent',
    mounted(){
        this.searchString=this.$route.params.searchString;
        this.$router.push('/search/'+this.searchString);
    },
    data(){
        return{
            searchString:null
        }
    }  
}
</script>


