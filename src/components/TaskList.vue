<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['add-task', 'complete-task', 'delete-task']);

const newTaskName = ref('');

const addTask = () => {
  if (newTaskName.value.trim()) {
    emit('add-task', newTaskName.value.trim());
    newTaskName.value = '';
  }
};

const completeTask = (taskId) => {
  emit('complete-task', taskId);
};

const deleteTask = (taskId) => {
  emit('delete-task', taskId);
};
</script>

<template>
  <div class="task-list">
    <h2>任务列表</h2>
    
    <div class="add-task">
      <input 
        v-model="newTaskName" 
        @keyup.enter="addTask"
        placeholder="添加新任务..." 
        class="task-input"
      />
      <button @click="addTask" class="add-btn">添加</button>
    </div>
    
    <div class="tasks">
      <div v-if="tasks.length === 0" class="no-tasks">
        暂无任务，添加一个吧！
      </div>
      
      <div 
        v-for="task in tasks" 
        :key="task.id" 
        :class="['task-item', { completed: task.completed }]"
      >
        <div class="task-content">
          <input 
            type="checkbox" 
            :checked="task.completed"
            @change="completeTask(task.id)"
          />
          <span class="task-name">{{ task.name }}</span>
        </div>
        <button @click="deleteTask(task.id)" class="delete-btn">
          删除
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-list {
  margin-top: 3rem;
  text-align: left;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.add-task {
  display: flex;
  margin-bottom: 1.5rem;
}

.task-input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.add-btn {
  padding: 0.8rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-btn:hover {
  background-color: #2980b9;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.no-tasks {
  text-align: center;
  color: #777;
  padding: 1rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background-color: #f9f9f9;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #f1f1f1;
}

.task-item.completed .task-name {
  text-decoration: line-through;
  color: #888;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.delete-btn {
  padding: 0.4rem 0.8rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .add-task {
    flex-direction: column;
  }
  
  .task-input {
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
  
  .add-btn {
    border-radius: 4px;
  }
}
</style>
