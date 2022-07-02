<template>
  <div>
    <section class="post-list">
      <PostPreviewVue
        id="1"
        preview-text="hello there"
        title="hello"
        :is-admin="isAdmin"
        thumbnail="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
      />
      <PostPreviewVue
        id="2"
        preview-text="hello there"
        title="hello"
        :is-admin="isAdmin"
        thumbnail="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
      />
      <PostPreviewVue
        id="3"
        preview-text="hello there"
        title="hello"
        :is-admin="isAdmin"
        thumbnail="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
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
