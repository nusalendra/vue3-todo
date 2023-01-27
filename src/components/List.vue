<template>
  <div style="margin-top: 20px;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
        <div class="row">
          <div class="col">
            <span v-if="todo.isDone">
              <del>{{ todo.activity }}</del>
            </span>
            <span v-else>
              {{ todo.activity }}
            </span>
          </div>
          <div class="col-auto">
            <button @click="doneTODO(index)" class="btn btn-info">Done</button>
          </div>
          <div class="col-auto">
            <button @click="deleteTODO(index)" class="btn btn-danger">X</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default: []
    }
  },
  
  setup(props, { emit }) {
    const deleteTODO = (index) => {
      emit("deleteTodo", index);
    };

    const doneTODO = (index) => {
      emit("doneTodo", index);
    }
    return {
      deleteTODO,
      doneTODO
    }
  }
}
</script>
