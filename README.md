# Gemma Chat for Windows (Ollama & LM Studio)

This is an optimized version of **Gemma Chat** adapted for Windows. It bypasses the macOS-exclusive MLX framework and connects directly to your local **Ollama** or **LM Studio** instances for high-performance "vibe coding".

## 🚀 Overview

Gemma Chat is a local-first coding agent that builds multi-file web projects (HTML/CSS/JS) with a real-time live preview. This version is patched to support the OpenAI-compatible APIs provided by Ollama and LM Studio, bringing local-first development to Windows.

## 🛠 Prerequisites

1.  **Node.js**: Install [Node 20+](https://nodejs.org/).
2.  **AI Backend**:
    *   **Ollama** (Recommended): [Download here](https://ollama.com/).
    *   **LM Studio**: [Download here](https://lmstudio.ai/).
3.  **Models**:
    *   For **Ollama**, pull a coding model:
        ```bash
        ollama pull qwen2.5-coder:latest
        ```
    *   For **LM Studio**, load any GGUF model and start the **Local Server** on port `1234`.

---

## 📥 Step-by-Step Installation

### 1. Clone the Repository
```bash
git clone https://github.com/alawalmuazu/Gemma-Chat-for-Windows-Ollama-LM-Studio-.git
cd Gemma-Chat-for-Windows-Ollama-LM-Studio-
```

### 2. Install NPM Dependencies
```bash
npm install
```

### 3. Start the Application
Run the development server. The app will automatically detect your Windows platform and skip the MLX setup.
```bash
npm run dev
```

---

## 💬 How to Use

### Using Ollama
1.  Ensure Ollama is running in your system tray.
2.  In the app, select **Qwen Coder (Ollama)** from the model dropdown.
3.  Switch to **Build Mode** and describe your project.

### Using LM Studio
1.  Open LM Studio and load a model.
2.  Go to the **Local Server** tab and click **Start Server** (ensure it's on port `1234`).
3.  In Gemma Chat, select **LM Studio Model** from the dropdown.

---

## ⚙️ Customizing Models
If you want to use different models, you can map them in `src/shared/types.ts`. Simply add your model's name (as it appears in `ollama list`) to the `AVAILABLE_MODELS` array.

## 📄 Credits
- **Original App**: [Ammaar Reshi](https://github.com/ammaarreshi/gemma-chat)
- **Adaptation**: Patched to support Windows/Ollama/LM Studio by bypassing the MLX framework.

---
*Note: This project is for educational purposes and demonstrates local-first agentic coding.*
