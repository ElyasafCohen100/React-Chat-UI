
<div align="center">

# 🍥 React Chat UI 🥷

### 💬 A Naruto-inspired chat interface built with React, TypeScript, Redux Toolkit & Material UI.

*A playful frontend project focused on interactive messaging, component-based design, and predictable state management.* ✨

![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

![GitHub stars](https://img.shields.io/github/stars/ElyasafCohen100/React-Chat-UI?style=social)
![GitHub forks](https://img.shields.io/github/forks/ElyasafCohen100/React-Chat-UI?style=social)

> **🥷 Mini Project | Frontend Development**  
> A Naruto-inspired interactive chat UI built with React, TypeScript, Redux Toolkit and Material UI.

## 🌿 About the Project

**React Chat UI** is a Naruto-inspired messaging interface set in the Hidden Leaf Village. 🏯 Choose a character, explore conversations, and send messages through a clean, interactive layout.

The project was built to practice **⚛️ React + TypeScript**, **🧠 Redux Toolkit for global state management**, and **🎨 Material UI for reusable interface components**.

> **📝 Note:** This is a frontend demonstration with predefined conversations and simulated message delivery. It does **not** include a backend, real-time messaging, authentication, or persistent storage. Messages are kept in Redux state while the app is running.

## 📸 Screenshots

<div align="center">

**🏯 Welcome Screen**

<img src="docs/images/chat-home.png" alt="Hidden Leaf Chat welcome screen with a list of Naruto characters" width="850" />

<br/><br/>

**💬 Active Conversation**

<img src="docs/images/chat-conversation.png" alt="Conversation with Naruto showing message bubbles and delivery status" width="850" />

</div>

## 🎬 Demo

<div align="center">

<img src="docs/images/chat-demo.gif" alt="Demo of selecting conversations and sending messages in React Chat UI" width="760" />

*🥷 Switch between characters, send messages, and watch the UI update.*

</div>

## ✨ Features

- 🥷 **Character conversations** — Switch between Naruto, Sakura, Sasuke, and Kakashi.
- 💬 **Interactive messaging** — Compose and send messages in the selected conversation.
- 🎨 **Distinct message bubbles** — Incoming and outgoing messages appear on opposite sides.
- 🟢 **Online/offline indicators** — See each character's simulated availability.
- 📤 **Delivery status simulation** — Messages move from `Sending...` to `Sent ✓` or `Failed ❌` after a short delay, depending on the character's online status.
- 🧠 **Centralized state** — Redux Toolkit manages conversations, selection, and message updates.
- 🔄 **Conversation switching** — Each conversation maintains its messages in app state while navigating between chats.
- 📜 **Automatic scrolling** — The message area scrolls toward the latest message.
- 🧩 **Reusable components** — A modular UI built with React and Material UI.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| ⚛️ **React** | Component-based user interface |
| 🔷 **TypeScript** | Static typing and clearer data models |
| 🧠 **Redux Toolkit** | Global chat state and reducer actions |
| 🔗 **React Redux** | Connecting React components to the store |
| 🎨 **Material UI (MUI)** | UI components and styling |
| ⚡ **Vite** | Development server and production builds |
| 🔍 **ESLint** | Code linting |

## 🧠 How State Management Works

The chat data is managed in a Redux Toolkit slice (`src/store/chatSlice.ts`). The slice tracks the available conversations and the currently selected conversation.

```text
🥷 User selects a character
          ↓
🎯 selectConversationAction
          ↓
🧠 Redux store updates selectedConversationId
          ↓
💬 React components display the selected chat
          ↓
⌨️ User sends a message
          ↓
📤 sendMessageAction → status: "sending"
          ↓
⏳ Simulated delivery delay (1.5 seconds)
          ↓
🔄 changeMessageStatusAction
          ↓
✅ "sent" (online) or ❌ "failed" (offline)
```

This flow demonstrates how Redux actions update shared application state and trigger UI updates. ✨

## 📁 Project Structure

```text
📁 React-Chat-UI/
├── 📂 public/                 # Public icons and static files
├── 📂 docs/
│   └── 📂 images/             # README screenshots and demo
├── 📂 src/
│   ├── 📂 assets/
│   │   └── 📂 avatars/        # Character avatars
│   ├── 📂 components/
│   │   ├── ChatHeader.tsx
│   │   ├── ConversationList.tsx
│   │   ├── MessageComposer.tsx
│   │   └── MessageList.tsx
│   ├── 📂 store/
│   │   ├── chatSlice.ts       # Chat state, actions, reducers
│   │   └── store.ts           # Redux store configuration
│   ├── 📂 types/
│   │   └── chatType.ts        # Conversation and message types
│   ├── App.tsx
│   └── main.tsx
├── 📦 package.json
└── ⚡ vite.config.ts
```

## 🚀 Getting Started

### 📋 Prerequisites

- 🟢 [Node.js](https://nodejs.org/) and npm installed

### 📥 Installation

**1. 📂 Clone the repository**

```bash
git clone https://github.com/ElyasafCohen100/React-Chat-UI.git
cd React-Chat-UI
```

**2. 📦 Install dependencies**

```bash
npm install
```

**3. ▶️ Start the development server**

```bash
npm run dev
```

🌐 Open the local URL shown in your terminal (usually `http://localhost:5173/`).

> **💡 Windows PowerShell tip:** If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev` instead.

### ⚙️ Additional Commands

```bash
npm run build    # 🏗️ Type-check and build for production
npm run preview  # 👀 Preview the production build locally
npm run lint     # 🔍 Run ESLint
```

## 🎯 Learning Goals

This project is a hands-on exercise in:

- ⚛️ Building a multi-component React interface
- 🧠 Managing shared state with Redux Toolkit
- 🔷 Using TypeScript types for chat data
- 🖱️ Handling user interactions and conditional rendering
- ⏳ Simulating asynchronous UI state transitions
- 🧩 Organizing a frontend project into maintainable modules

---

## 👋 Created with Good Vibes By 🎉

<p align="center">
  <a href="https://github.com/ElyasafCohen100">
    <img src="https://raw.githubusercontent.com/ElyasafCohen100/React-PhoneBook-App/main/EC2.jpeg" alt="Elyasaf Cohen" width="450" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/ElyasafCohen100">
    <img src="https://img.shields.io/badge/GitHub-Elyasaf_Cohen-181717?style=for-the-badge&logo=github&logoColor=white" alt="Elyasaf Cohen on GitHub" />
  </a>
</p>

---

<div align="center">

### 🍥 Built with React, Redux & a little Hidden Leaf spirit! 🍃

**⭐ If you enjoyed exploring the project, consider giving it a star! ⭐**

🥷 *Believe it! Dattebayo!* 🔥

</div>
