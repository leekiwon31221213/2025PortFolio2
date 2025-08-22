<template>
  <div class="wrap" id="portFolioContainer">
    <Header></Header>
    <Info></Info>
    <About></About>
  </div>
</template>
<script setup>
import Header from './components/header/Header'
import Info from './components/section/MainIntro.vue'
import About from './components/section/About.vue'
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
