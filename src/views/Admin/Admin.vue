<template>
  <div class="about">
    <h1>Admin</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
    this.$route.name !== 'AddProject' ? this.$router.push({name: 'AddProject'}) : false
  }
}
</script>
