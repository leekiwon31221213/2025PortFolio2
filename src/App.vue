<template>
  <div class="wrap" id="portFolioContainer">
    <Header></Header>
    <Info></Info>
  </div>
</template>
<script setup>
import Header from "./components/header/Header";
import Info from "./components/section/Info.vue";
</script>

<style lang="scss">
body {
  background-color: $main-bg;
  color: $white;
}
:lang(ko) {
  font-family: $font-ko;
}

:lang(en) {
  font-family: $font-en;
}
</style>
