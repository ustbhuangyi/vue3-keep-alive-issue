<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="showSub">click me</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    console.log('home page created')
  },
  methods: {
    showSub() {
      this.$router.push('/home/sub')
    }
  }
}
</script>
