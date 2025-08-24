<template>
  <div class="wrap" id="portFolioContainer">
    <Header></Header>
    <Info></Info>
    <About></About>
    <Skill></Skill>
  </div>
</template>
<script setup>
import Header from './components/header/Header'
import Info from './components/section/MainIntro'
import About from './components/section/About'
import Skill from './components/section/Skill'
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
