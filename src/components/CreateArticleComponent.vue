<template src="./CreateArticleComponent.html"></template>

<script>
//Libreria Axios para peticiones http
import axios from "axios";
import SidebarComponent from "./SidebarComponent.vue";
//Importar url global
import { required } from "vuelidate/lib/validators";

//Alertas
import swal from "sweetalert";
//Modelo
import Article from "../models/Article.js";
import { Global } from "../Global";

export default {
  name: "CreateArticleComponent",
  components: {
    SidebarComponent,
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      url: Global.url,
      submitted: false,
      file: "",
      isEdit:false
    };
  },
  mounted() {
    console.log(this.article);
  },
  methods: {
    //Verificar la validacion
    saveArticle() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "/save", this.article)
          .then((res) => {
            this.submitted = true;
            // this.article = res.data.articleStored;
            if (res.data.status == "success") {
              //Subir ficheros alformulario
              if (
                this.file != null &&
                this.file != "undefined" &&
                this.file != ""
              ) {
                const formData = new FormData();

                formData.append("file0", this.file, this.file.name);

                var articleId = res.data.articleStored._id;

                axios
                  .post(this.url + "/uploadimg/" + articleId, formData)
                  .then((res_img) => {
                    console.log(res_img);
                    if (res_img.data.article) {
                      this.article = res_img.data.article;
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    swal(
                      "Imagen no guardada",
                      "No ha guardado la imagen",
                      "danger"
                    );
                  });
              }

              swal("Articulo guardado", "Se ha creado exitosamente", "success");

              setTimeout(() => {
                this.$router.push("/blog");
              }, 1000);
            }
          })
          .catch((error) => {
            swal("Articulo no guardado", "No ha creado el articulo", "danger");
            console.log(error);
          });
      }
    },

    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
  },
};
</script>