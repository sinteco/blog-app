<template>
  <div class="posts-page">
    <PostListVue />
  </div>
</template>
<script>
import PostListVue from "../../components/Post/PostList.vue";
export default {
  components: {
    PostListVue,
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
