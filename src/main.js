import Vue from 'vue'
import App from './App.vue'
//Importar la dependencia para generar el router
import VueRouter from 'vue-router';
//Validacion
import Vuelidate from 'vuelidate'

//Componentes para indexar a las rutas
import LastArticlesComponent from './components/LastArticlesComponent.vue';
import MiComponente from './components/MiComponente.vue';
import BlogComponent from './components/BlogComponent.vue';
import ArticleComponent from './components/ArticleComponent.vue';
import CreateArticleComponent from './components/CreateArticleComponent.vue';
import EditArticleComponent from './components/EditArticleComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import RedirectComponent from './components/RedirectComponent.vue';
import FormularioComponent from './components/FormularioComponent.vue';
import PeliculaComponent from './components/PeliculaComponent.vue';
import PaginaComponent from './components/PaginaComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';

Vue.config.productionTip = false

//Usar el VueRouter dentro de Vue
Vue.use(VueRouter);
Vue.use(Vuelidate);

//Moment en espanol
const moment = require('moment');
require('moment/locale/es');
Vue.use(require('vue-moment'), { moment });

const routes = [
  { path: '/', component: LastArticlesComponent },
  { path: '/home', component: LastArticlesComponent },
  { path: '/ultimos-articulos', component: LastArticlesComponent },
  { path: '/mi-componente', component: MiComponente },
  { path: '/blog', component: BlogComponent },
  { path: '/article/:id', name: 'article', component: ArticleComponent },
  { path: '/edit/:id', name: 'articleedit', component: EditArticleComponent },
  { path: '/create-article', name: 'create-article', component: CreateArticleComponent },
  { path: '/search/:searchString', component: SearchComponent },
  { path: '/redirect/:searchString', component: RedirectComponent },
  { path: '/formulario', component: FormularioComponent },
  { path: '/pelicula', component: PeliculaComponent },
  //name: es un nombre para usarlo en los enlaces cuando se pasa un parametro,/:id parametro obligatorio,parametro opcional /:id? 
  { path: '/pagina/:id?', name: 'pagina', component: PaginaComponent },
  { path: '*', component: ErrorComponent },
];

const router = new VueRouter({
  //Array de rutas
  routes,
  //Funcionamiento
  mode: 'history'
});

new Vue({
  //Dar de alta el router para que funcione de manera global
  router,
  render: h => h(App),
}).$mount('#app')
