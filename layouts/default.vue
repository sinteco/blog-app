<template>
  <div>
    <TheHeader @sidenavToggle="displaySidebar=!displaySidebar" />
    <TheSidenav
    :show="displaySidebar"
    @close="displaySidebar = false"
    />
    <Nuxt />
  </div>
</template>
<style>
html {
  font-family: 'The Nautigal', cursive;
}
body {
  margin: 0;
}
</style>
<script>
import TheHeader from "../components/Navigation/TheHeader";
import TheSidenav from "../components/Navigation/TheSidenav";
export default {
  components: {
    TheSidenav,
    TheHeader
  },
  data(){
    return{
      displaySidebar:false
    }
  }
}
</script>