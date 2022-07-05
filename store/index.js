import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {},
      editPost(state, editPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => (post.id = editPost.id)
        );
        state.loadedPosts[postIndex] = editPost;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            "https://nuxtblog-7a06e-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
          )
          .then((res) => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postArray);
          })
          .catch((e) => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContextn, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        return axios
          .post(
            "https://nuxtblog-7a06e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
            createdPost
          )
          .then((res) => {
            vuexContextn.commit("addPost", {
              ...createdPost,
              id: res.data.name,
            });
          })
          .catch((e) => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            "https://nuxtblog-7a06e-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
              editedPost.id +
              ".json",
            editedPost
          )
          .then((res) => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch((e) => console.log(e));
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};
export default createStore;
