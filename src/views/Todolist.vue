<template>
 <div class="todolist">
    <h1>TODO List</h1>
    
    <input type="text" v-model="keywords"> 
    <button @click="add">添加</button>
    <hr />

    
    <li v-for="(todo,index) in todos" v-bind:key="todo.title">
        {{todo.title}} 
        <button @click="del(index)">删除</button>
    </li>
</div>
</template>

<script>
 import NavBar from '@/components/NavBar'
 export default {
   data () {
     return {
         // 关键词
            keywords: "",
            // 列表数据
            todos: [
                {id:1, title:"吃饭"},
                {id:2, title:"睡觉"},
                {id:3, title:"挤痘痘"}
            ]
     }
   },
   created() {

   },
   methods: {
        add() {
            this.todos.push({
                // id: this.todos[this.todos.length-1].id + 1,
                id: this.todos.length,
                title: this.keywords
            })
        },
        del(index) {
            this.todos.splice(index, 1)
        }
   }
 }
</script>

<style lang='less' scoped>

 
</style>
