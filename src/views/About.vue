<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showSub">click me</button>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'About',
    created() {
      console.log('about page created')
    },
    methods: {
      showSub() {
        this.$router.push('/about/sub')
      }
    }
  }
</script>

