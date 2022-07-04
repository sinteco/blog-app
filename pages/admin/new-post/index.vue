<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostFormVue @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import AdminPostFormVue from "../../../components/Admin/AdminPostForm.vue";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostFormVue,
  },
  methods: {
    onSubmitted(postData) {
      axios
        .post(
          "https://nuxtblog-7a06e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
          { ...postData, updatedDate: new Date() }
        )
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
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
