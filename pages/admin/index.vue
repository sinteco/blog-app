<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButtonVue @click="$router.push('/admin/new-post')"
        >Create Post</AppButtonVue
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
    </section>
    <PostListVue isAdmin />
  </div>
</template>
<script>
import PostListVue from "../../components/Post/PostList.vue";
import AppButtonVue from "../../components/UI/AppButton.vue";
export default {
  layout: "admin",
  components: {
    PostListVue,
    AppButtonVue,
  },
};
</script>
<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
