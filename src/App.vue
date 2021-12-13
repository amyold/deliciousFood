<template>
  <div class="main">
    <navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
import navs from "./views/nav.vue";
export default {
  components: { navs },
  name: "",
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
body{
  width: 100%;
}
.main {
  display: flex;
  flex-direction: row;
}
</style>