<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="!$v.user.nombre.required">El campo es requerido</div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellido" />
            <div v-if="!$v.user.apellido.required">El campo es requerido</div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio"></textarea>
            <div v-if="!$v.user.bio.required">El campo es requerido</div>
          </div>

          <div class="form-group radibuttons">
            <input
              type="radio"
              name="genero"
              value="hombre"
              v-model="user.genero"
            />
            
            Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="user.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="user.genero"
            />
            Otro
          <div v-if="!$v.user.genero.required">El campo es requerido</div>
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <SidebarComponent></SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormularioComponent",
  components: {
    SidebarComponent,
  },
  validations: {
    user:{
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellido: {
        required,
        minLength: minLength(2),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
      genero: {
        required
      }
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellido: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
      this.submitted= true;
      this.$v.$touch();
      if (this.$v.invalid) {
        return false;
      }

      alert('Validacion pasada');
    },
  },
};
</script>