<template>
    <section class="main">
        <input type="text" placeholder="sss" autoFoucs="autoFoucs" v-model="inputValue" @keyup.enter="add"/>
        <ul class="todo-list">
            <li class="todo" v-for = "(item, index) in list" :key = "index">
                <div class="view">
                    <span class="index">{{ index+1 }}</span>
                    <label>{{ item }}</label>
                    <button class="close" @click = "remove">&times;</button>
                </div>
            </li>
        </ul>

        <footer>
            <span v-if="list.length!=0">
                <strong>{{ list.length }}</strong>
                "items left"
            </span>
            <button class="clear" @click="clear" v-show="list.length!=0">清空</button>
        </footer>
    </section>
</template>

<script>
export default {
    name:'note',
    data(){
        return {
            list: ["写代码","吃饭饭","睡觉觉"],
            inputValue: "好好学习，天天向上"
        }
    },
    methods: {
        add: function(){
            this.list.push(this.inputValue)
        },
        remove: function(index){
            this.list.splice(index, 1);
        },
        clear: function(){
            this.list = [];
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        width: 400px;
        margin: 0 auto;
        ul li{
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
    }
    input{
        border: 1px solid #333;
        width: 400px;
    }
    .close{
        display: none;
        float: right;
    }
    li:hover button{
        display: block;
    }
</style>