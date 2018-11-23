<template>
  <div class="about">
    <h1>Counter</h1>
    <p>{{count}}</p>
    <div>
      <el-button type="button" @click="increment">+</el-button>
      &nbsp;
      <el-button type="button" @click="decrement">-</el-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>
