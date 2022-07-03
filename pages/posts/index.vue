<template>
  <div class="posts-page">
    <PostListVue :posts="loadedPosts" />
  </div>
</template>
<script>
import PostListVue from "../../components/Post/PostList.vue";
export default {
  components: {
    PostListVue,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
