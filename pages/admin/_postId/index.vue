<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostFormVue :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import AdminPostFormVue from "../../../components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: {
    AdminPostFormVue,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxtblog-7a06e-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        console.log(res.data);
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
