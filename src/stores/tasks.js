import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([])

  // 添加任务
  function addTask(taskName) {
    tasks.value.push({
      id: Date.now(),
      name: taskName,
      completed: false,
      pomodoros: 0
    })
  }

  // 完成任务
  function completeTask(taskId) {
    const task = tasks.value.find(task => task.id === taskId)
    if (task) {
      task.completed = !task.completed
    }
  }

  // 删除任务
  function deleteTask(taskId) {
    tasks.value = tasks.value.filter(task => task.id !== taskId)
  }

  // 增加任务的番茄钟数量
  function incrementTaskPomodoro(taskId) {
    const task = tasks.value.find(task => task.id === taskId)
    if (task) {
      task.pomodoros += 1
    }
  }

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
    incrementTaskPomodoro
  }
})
