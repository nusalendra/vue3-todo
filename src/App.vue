<template>
  <div class="container" style="margin-top: 20px;">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          SIMPLE TODO APP
        </h5>
        <div class="row">
          <div class="col-10">
            <input type="text" v-model="todo" class="form-control" @keyup.enter="add">
          </div>
          <div class="col-2">
            <button @click="add" class="btn btn-primary">ADD</button>
          </div>
          <list 
            :todos="list"
            @deleteTodo="deleteTodo"
            @doneTodo="doneTodo"
          />
        </div>
        <small>Total TODO : {{ totalTodo }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed, toRefs} from 'vue';

export default {
  setup() {
    const todo = ref("");
    const todos = reactive({
      list: []
    });

    onMounted(() => {
      todos.list = JSON.parse(localStorage.getItem('todos'))
    })

    const totalTodo = computed(() => {
      return todos.list.length;
    });

    const add = () => {
      todos.list.unshift({
        activity: todo.value,
        isDone: false
      });
      todo.value = ""
      saveToLocalStorage();
    };

    const deleteTodo = (todoIndex) => {
      todos.list = todos.list.filter((item, index) => {
        if(index != todoIndex) {
          return item
        }
      });
      saveToLocalStorage();
    };

    const doneTodo = (todoIndex) => {
      todos.list = todos.list.filter((item, index) => {
        if(index == todoIndex) {
          item.isDone = true
        }

        return item
      });
      saveToLocalStorage();
    };

    const saveToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos.list))
    }

    return {
      todo, 
      ...toRefs(todos), 
      totalTodo, 
      add, 
      deleteTodo, 
      doneTodo, 
      saveToLocalStorage
    }
  }
}
</script>