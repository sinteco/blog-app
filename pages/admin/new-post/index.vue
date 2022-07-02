<template>
  <div class="admin-new-post-page">
    <section class="new-post-form"><AdminPostFormVue /></section>
  </div>
</template>
<script>
import AdminPostFormVue from "../../../components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: {
    AdminPostFormVue,
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
