# 番茄钟应用

一个基于 Vue 3 + Vite 构建的现代化番茄钟应用，帮助你提高工作效率和时间管理能力。

## 功能特点

### 1. 三种工作模式
- 🎯 工作模式（25分钟）
- ☕ 短休息（5分钟）
- 🌴 长休息（15分钟）

### 2. 智能计时功能
- ⏱️ 实时显示剩余时间
- ⏯️ 开始/暂停/重置控制
- 🔄 自动模式切换
- 🎵 计时结束提示音
- 🔋 每完成4个番茄钟自动进入长休息

### 3. 任务管理
- ➕ 添加新任务
- ✅ 标记任务完成
- 🗑️ 删除任务
- 📊 任务进度追踪

### 4. 其他特性
- 💫 优雅的动画效果
- 📱 响应式设计，支持各种设备
- 🔔 友好的提示通知
- 🎨 现代化UI界面

## 技术栈

- Vue 3
- Vite
- Pinia (状态管理)
- Vue Toastification (通知系统)
- Animate.css (动画效果)

## 开始使用

### 安装依赖
```bash
npm install
```

### 开发环境运行
```bash
npm run dev
```
应用将在 http://localhost:3000 启动

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 使用说明

1. 选择工作模式（默认为工作模式 - 25分钟）
2. 点击"开始"按钮开始计时
3. 需要时可以随时暂停或重置计时器
4. 在任务列表中添加待办任务
5. 完成任务后可以标记或删除
6. 每个工作周期结束后会自动切换到休息模式
7. 完成4个番茄钟后会自动进入长休息模式

## 项目结构

```
pomodoro-app/
├── src/
│   ├── components/        # 组件文件
│   │   ├── Timer.vue     # 计时器组件
│   │   ├── TaskList.vue  # 任务列表组件
│   │   └── ModeSelector.vue  # 模式选择器组件
│   ├── stores/           # Pinia 状态管理
│   │   ├── pomodoro.js   # 番茄钟状态
│   │   └── tasks.js      # 任务状态
│   ├── App.vue          # 主应用组件
│   └── main.js          # 应用入口
├── public/              # 静态资源
│   └── notification.mp3 # 提示音文件
└── package.json        # 项目配置文件
```

## 自定义配置

你可以在以下文件中修改相关配置：

- `src/stores/pomodoro.js`: 修改时间设置
- `src/main.js`: 修改通知配置
- `vite.config.js`: 修改项目配置

## 浏览器支持

- ✅ 现代浏览器
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交改动
4. 推送到分支
5. 提交 Pull Request

## 开源协议

MIT License
