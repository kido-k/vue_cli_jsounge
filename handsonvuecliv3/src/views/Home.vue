<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{count}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  components: {
    HelloWorld
  }
}
</script>
