export type SetupStage =
  | 'checking'
  | 'installing-mlx'
  | 'starting-mlx'
  | 'downloading-model'
  | 'ready'
  | 'error'

export interface SetupStatus {
  stage: SetupStage
  message: string
  progress?: number
  bytesDone?: number
  bytesTotal?: number
  error?: string
}

export interface ToolCall {
  id: string
  name: string
  args: Record<string, unknown>
  result?: string
  error?: string
  running?: boolean
}

export type Role = 'user' | 'assistant' | 'system' | 'tool'

export interface ChatMessage {
  id: string
  role: Role
  content: string
  toolCalls?: ToolCall[]
  createdAt: number
  model?: string
  done?: boolean
  activity?: AgentActivity
}

export type AgentMode = 'chat' | 'code'

export interface ChatRequest {
  conversationId: string
  messages: Array<{ role: Role; content: string; toolCalls?: ToolCall[] }>
  model: string
  enableTools: boolean
  mode: AgentMode
}

export interface WorkspaceInfo {
  conversationId: string
  path: string
  previewUrl: string
}

export interface WorkspaceFile {
  path: string
  kind: 'file' | 'dir'
  size?: number
}

export interface FileChangeEvent {
  conversationId: string
}

export type AgentActivity =
  | { kind: 'idle' }
  | { kind: 'thinking'; chars?: number }
  | { kind: 'generating'; chars?: number }
  | { kind: 'tool'; tool: string; target?: string; chars?: number }

export type StreamChunk =
  | { type: 'token'; text: string }
  | { type: 'tool_call'; call: ToolCall }
  | { type: 'tool_result'; id: string; result?: string; error?: string }
  | { type: 'activity'; activity: AgentActivity }
  | { type: 'done' }
  | { type: 'error'; error: string }

export interface ModelInfo {
  /** HuggingFace repo ID — used internally for mlx_lm */
  name: string
  /** Short, user-friendly display name */
  label: string
  size: string
  sizeBytes: number
  description: string
  recommended?: boolean
}

export const AVAILABLE_MODELS: ModelInfo[] = [
  {
    name: 'qwen-coder:latest',
    label: 'Qwen Coder (Ollama)',
    size: '8 GB',
    sizeBytes: 8_000_000_000,
    description: 'Specialized for coding. Excellent for Build Mode.',
    recommended: true
  },
  {
    name: 'qwq:latest',
    label: 'QwQ (Ollama)',
    size: '18 GB',
    sizeBytes: 18_000_000_000,
    description: 'Strong reasoning model.'
  },
  {
    name: 'lm-studio',
    label: 'LM Studio Model',
    size: 'External',
    sizeBytes: 0,
    description: 'Connects to whichever model is currently loaded in LM Studio.'
  },
  {
    name: 'mlx-community/gemma-4-e4b-it-4bit',
    label: 'Gemma 4 E4B (MLX)',
    size: '3 GB',
    sizeBytes: 3_000_000_000,
    description: 'Original MLX model (macOS only).',
  }
]

export const DEFAULT_MODEL = 'qwen-coder:latest'

