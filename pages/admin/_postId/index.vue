<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostFormVue :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostFormVue from "../../../components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: {
    AdminPostFormVue,
  },
  data() {
    return {
      loadedPost: {
        author: "Maximilan",
        title: "My ausome post",
        content: "super amazing, thanks for that",
        thumbnailLink:
          "https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg",
      },
    };
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
