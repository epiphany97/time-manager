<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from 'vue-toastification';
import { usePomodoroStore } from './stores/pomodoro';
import { useTaskStore } from './stores/tasks';
import Timer from './components/Timer.vue';
import TaskList from './components/TaskList.vue';
import ModeSelector from './components/ModeSelector.vue';

// 使用 Pinia 状态管理
const pomodoroStore = usePomodoroStore();
const taskStore = useTaskStore();
const toast = useToast();

// 通知声音
const notificationSound = ref(null);

// 计时器逻辑
let timerInterval;

const runTimer = () => {
  if (pomodoroStore.isActive && !pomodoroStore.isPaused) {
    if (pomodoroStore.timeLeft > 0) {
      pomodoroStore.decrementTime();
    } else {
      // 计时结束
      notificationSound.value.play();
      
      // 如果是工作模式结束
      if (pomodoroStore.currentMode.id === 'work') {
        pomodoroStore.completePomodoro();
        toast.success('工作时间结束！休息一下吧。');
      } else {
        // 如果是休息模式结束
        pomodoroStore.completeBreak();
        toast.info('休息时间结束！开始新的工作吧。');
      }
      
      // 自动开始下一个计时
      pomodoroStore.startTimer();
    }
  }
};

onMounted(() => {
  timerInterval = setInterval(runTimer, 1000);
  notificationSound.value = new Audio('/notification.mp3');
  
  // 测试通知
  toast.info('番茄钟应用已准备就绪！');
});

onBeforeUnmount(() => {
  clearInterval(timerInterval);
});

</script>

<template>
  <div class="pomodoro-app">
    <h1>番茄钟</h1>
    
    <div class="stats">
      <p>已完成番茄钟: {{ pomodoroStore.completedPomodoros }}</p>
    </div>
    
    <ModeSelector 
      :modes="pomodoroStore.modes" 
      :currentMode="pomodoroStore.currentMode" 
      @change-mode="pomodoroStore.changeMode" 
    />
    
    <Timer 
      :timeLeft="pomodoroStore.formattedTime" 
      :isActive="pomodoroStore.isActive"
      :isPaused="pomodoroStore.isPaused"
      @start="pomodoroStore.startTimer"
      @pause="pomodoroStore.pauseTimer"
      @reset="pomodoroStore.resetTimer"
    />
    
    <TaskList 
      :tasks="taskStore.tasks"
      @add-task="taskStore.addTask"
      @complete-task="taskStore.completeTask"
      @delete-task="taskStore.deleteTask"
    />
  </div>
</template>

<style scoped>
.pomodoro-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #e74c3c;
  margin-bottom: 2rem;
}

.stats {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #555;
}

@media (max-width: 768px) {
  .pomodoro-app {
    padding: 1rem;
  }
}
</style>
