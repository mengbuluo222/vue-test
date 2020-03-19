<template>
    <div>
        <p>{{ info }}}</p>
        yu
    </div>
</template>

<script>
export default {
    data () {
    return {
      info: null
    }
  },
  mounted () {
      this.$axios.get("https ://bird.ioliu.cn/netease/song?id=222222").then(
          res => console.log(res)
      )
  }
}
</script>

<style lang="scss" scoped>

</style>