<template>
  <StackLayout
    class="wrapper"
  >
    <router-view></router-view>
  </StackLayout>
</template>

<script >
export default {
  name: 'Container'
}
</script>

<style>
  .container__wrapper {
    width: 100%;
    height: 100%;
  }
</style>