<template>
  <div>
    <section class="post-list">
      <PostPreviewVue
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :preview-text="post.previewText"
        :title="post.title"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnail"
      />
    </section>
  </div>
</template>
<script>
import PostPreviewVue from "./PostPreview.vue";
export default {
  components: {
    PostPreviewVue,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
