<template>
  <StackLayout>
    <Button text="login" @tap="$router.push('/auth/login')"/>
    <Label text="dashboard"/>
  </StackLayout>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>
  
</style>