<template>
    <button :title="sss">
      Click me to be welcomed
      <p >{{ age }}</p>
      <p>{{ name }}</p>
    </button>
</template>

<script>
import { EventBus } from "../EventBus.js";

export default {
    name: "welcome-button",
    data(){
        return {
            age: ""
        }
    },
    mounted () {
        EventBus.$on("data-b", age => {
            this.age = age;
        }),
        console.log(this.name); 
    },
    beforeDestroy(){
        EventBus.$off()
    },
    inject: ['name'],
}
</script>

<style lang="scss" scoped>

</style>