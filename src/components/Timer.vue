<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  timeLeft: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isPaused: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['start', 'pause', 'reset']);

const handleStart = () => {
  emit('start');
};

const handlePause = () => {
  emit('pause');
};

const handleReset = () => {
  emit('reset');
};
</script>

<template>
  <div class="timer animate__animated animate__fadeIn">
    <div class="time-display">{{ timeLeft }}</div>
    <div class="controls">
      <button 
        v-if="!isActive || isPaused" 
        @click="handleStart" 
        class="btn start-btn animate__animated animate__pulse animate__infinite"
      >
        {{ isPaused ? '继续' : '开始' }}
      </button>
      <button 
        v-if="isActive && !isPaused" 
        @click="handlePause" 
        class="btn pause-btn"
      >
        暂停
      </button>
      <button 
        @click="handleReset" 
        class="btn reset-btn"
      >
        重置
      </button>
    </div>
  </div>
</template>

<style scoped>
.timer {
  margin: 2rem 0;
}

.time-display {
  font-size: 5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.start-btn {
  background-color: #2ecc71;
  color: white;
}

.start-btn:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}

.pause-btn {
  background-color: #f39c12;
  color: white;
}

.pause-btn:hover {
  background-color: #e67e22;
  transform: translateY(-2px);
}

.reset-btn {
  background-color: #e74c3c;
  color: white;
}

.reset-btn:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .time-display {
    font-size: 3.5rem;
  }
  
  .btn {
    padding: 0.6rem 1.2rem;
  }
}
</style>
