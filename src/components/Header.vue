<template>
    <div @click="changeValue" ss="ddd">
        <p >{{ title }}</p>
        <p>{{ aa }}</p>
        <h3>B组件：{{age}}</h3>
        <button @click="send">将数组发送给C组件</button>
        {{ $attrs.ss }}
        <h1>{{ msg }}</h1>
        <p>{{ $attrs.ss }}</p>
    </div>
</template>

<script>
import { EventBus } from "../EventBus.js";

export default {
    name: 'app-header',
    data(){
        return {
            aa: "我是传值",
            age: 20,
            
        }
    },
    props: {
        title: String,
        msg: String,
    },
    methods:{
        changeValue: function(){
            this.$emit("valueChanged",this.aa);
        },
        send() {
        EventBus.$emit('data-b', this.age);
      }
    },
  
}
</script>

