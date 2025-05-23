<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modes: {
    type: Array,
    required: true
  },
  currentMode: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['change-mode']);

const selectMode = (mode) => {
  emit('change-mode', mode);
};
</script>

<template>
  <div class="mode-selector">
    <button 
      v-for="mode in modes" 
      :key="mode.id"
      :class="['mode-btn', { active: currentMode.id === mode.id }]"
      @click="selectMode(mode)"
    >
      {{ mode.name }}
    </button>
  </div>
</template>

<style scoped>
.mode-selector {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.mode-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.mode-btn:hover {
  background-color: #e0e0e0;
}

.mode-btn.active {
  background-color: #3498db;
  color: white;
}

@media (max-width: 768px) {
  .mode-selector {
    flex-direction: column;
    gap: 0.5rem;
    max-width: 200px;
    margin: 0 auto 2rem;
  }
}
</style>
