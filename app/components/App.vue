<template>
  <Page actionBarHidden="true">
    <FlexboxLayout 
      class="wrapper"
      justifyContent="space-around"
      alignItems="center"
    >
      <router-view/>
    </FlexboxLayout>
  </Page>
</template>

<script >
export default {
  mounted() {
    this.$router.replace('/'); // init vue-router
  },
}
</script>

<style scoped>
  .wrapper {
    background: transparent;
  }

  .btn {
    text-align: center;
    font-size: 20;
    padding: 10 20;
    background: #000;
    font-family: sans-serif;
    color: #fff;
  }
</style>
