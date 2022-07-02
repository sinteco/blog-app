<template>
<div class="posts-page">
    <PostPreviewVue id="1" preview-text="hello there" title="hello" thumbnail="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"/>
    <PostPreviewVue id="2" preview-text="hello there" title="hello" thumbnail="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"/>
    <PostPreviewVue id="3" preview-text="hello there" title="hello" thumbnail="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"/>
</div>
</template>
<script>
import PostPreviewVue from '../../components/Post/PostPreview.vue'
export default {
  components: {
    PostPreviewVue
  }
}
</script>
<style scoped>
.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>