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
  name: "EditArticleComponent",
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
      isEdit: true,
    };
  },
  mounted() {
    //console.log(this.article);
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "/article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    //Verificar la validacion
    saveArticle() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "/article/" + this.article._id, this.article)
          .then((res) => {
            console.log(res);
            this.submitted = true;
            // this.article = res.data.article;
            if (res.status == "200") {
              //Subir ficheros alformulario
              if (
                this.file != null &&
                this.file != "undefined" &&
                this.file != ""
              ) {
                const formData = new FormData();

                formData.append("file0", this.file, this.file.name);

                var articleId = res.data.article._id;

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
                      "Imagen no actualizada",
                      "No ha actualizado la imagen",
                      "error"
                    );
                  });
              }
            }
            swal(
              "Articulo guardado",
              "Se ha actualizado exitosamente",
              "success"
            );
            setTimeout(() => {
              this.$router.push("/article/" + this.article._id);
            }, 1000);
          })
          .catch((error) => {
            swal(
              "Articulo no guardado",
              "No ha actualizado el articulo",
              "error"
            );
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