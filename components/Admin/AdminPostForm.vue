<template>
  <form @submit.prevent="onSave">
    <AppControlInputVue v-model="editedPost.author"
      >Author Name</AppControlInputVue
    >
    <AppControlInputVue v-model="editedPost.title">Title</AppControlInputVue>
    <AppControlInputVue v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInputVue
    >
    <AppControlInputVue control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInputVue
    >
    <AppControlInputVue control-type="textarea" v-model="editedPost.previewText"
      >Preview Test</AppControlInputVue
    >
    <AppButtonVue type="submit">Save</AppButtonVue>
    <AppButtonVue
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButtonVue
    >
  </form>
</template>
<script>
import AppButtonVue from "../UI/AppButton.vue";
import AppControlInputVue from "../UI/AppControlInput.vue";
export default {
  components: {
    AppButtonVue,
    AppControlInputVue,
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: "",
          },
    };
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
