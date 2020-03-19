<template>
<div>
    <!-- <input type="button" value="get请求" class="get" @click="getJoke"/> -->
    <!-- <input type="button" value="post请求" class="post"/> -->
    <!-- <div v-for="(site,index) in info" :key="index">{{ site.name }}</div> -->
    <p>{{ joke }}</p>
</div>
</template>

<script>
export default {
    name: "myaxios",
    data(){
        return {
            joke: "笑话"
        }
    },
    // mounted(){
    //     axios.post("https://api.jisuapi.com/xiaohua/text?pagenum=1&pagesize=1&sort=addtime&appkey=1fa53d464cf3a52d").then(
    //         function(){
    //             console.log(res)
    //         }
    //     )
    // }
    // methods: {
    //     getJoke: function(){
    //         this.axios
    //         .get("api/xiaohua/text?pagenum=1&pagesize=1&sort=addtime&appkey=1fa53d464cf3a52d")
    //         .then(function(res){
    //             console.log(res);
    //         })
    //         .catch(function(err){
    //             console.log(err)
    //         })
    //     }
    // }
}
</script>

<style lang="scss" scoped>

</style>