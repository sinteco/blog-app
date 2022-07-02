<template>
  <form @sumbit.prevent="onSave">
    <AppControlInputVue v-model="editedPost.author"
      >Author Name</AppControlInputVue
    >
    <AppControlInputVue v-model="editedPost.title">Title</AppControlInputVue>
    <AppControlInputVue v-model="editedPost.thumbnailLink"
      >Thumbnail Link</AppControlInputVue
    >
    <AppControlInputVue control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInputVue
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
            thumbnailLink: "",
            content: "",
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
      console.log(this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
