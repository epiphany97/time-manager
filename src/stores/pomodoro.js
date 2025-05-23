import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePomodoroStore = defineStore('pomodoro', () => {
  // 番茄钟状态
  const modes = [
    { id: 'work', name: '工作模式', duration: 25 * 60 },
    { id: 'shortBreak', name: '短休息', duration: 5 * 60 },
    { id: 'longBreak', name: '长休息', duration: 15 * 60 }
  ]

  const currentMode = ref(modes[0])
  const isActive = ref(false)
  const isPaused = ref(false)
  const timeLeft = ref(currentMode.value.duration)
  const completedPomodoros = ref(0)
  const pomodoroSequence = ref(0)

  // 计算格式化的时间
  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  })

  // 切换模式
  function changeMode(mode) {
    currentMode.value = mode
    resetTimer()
  }

  // 开始计时器
  function startTimer() {
    if (!isActive.value || isPaused.value) {
      isActive.value = true
      isPaused.value = false
    }
  }

  // 暂停计时器
  function pauseTimer() {
    isPaused.value = true
  }

  // 重置计时器
  function resetTimer() {
    isActive.value = false
    isPaused.value = false
    timeLeft.value = currentMode.value.duration
  }

  // 完成一个番茄钟
  function completePomodoro() {
    completedPomodoros.value += 1
    pomodoroSequence.value += 1
    
    // 每完成4个番茄钟后进入长休息
    if (pomodoroSequence.value % 4 === 0) {
      changeMode(modes[2]) // 长休息
    } else {
      changeMode(modes[1]) // 短休息
    }
  }

  // 完成休息
  function completeBreak() {
    changeMode(modes[0]) // 回到工作模式
  }

  // 减少时间
  function decrementTime() {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1
    }
  }

  return {
    modes,
    currentMode,
    isActive,
    isPaused,
    timeLeft,
    completedPomodoros,
    formattedTime,
    changeMode,
    startTimer,
    pauseTimer,
    resetTimer,
    completePomodoro,
    completeBreak,
    decrementTime
  }
})
