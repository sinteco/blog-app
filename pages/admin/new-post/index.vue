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
      this.$store.dispatch("addPost", postData).then(() => {
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
