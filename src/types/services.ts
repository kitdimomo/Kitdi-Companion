export interface TouchReading {
  at: string
}

/** Desk unit: display, speaker path, microphone, touch, and the link between them. */
export interface HardwareBridge {
  readonly connected: boolean
  readTouch(): Promise<TouchReading | null>
  showOnDisplay(message: string): Promise<void>
}

export interface VoiceBridge {
  readonly listening: boolean
  transcribe(): Promise<null>
  speak(phrase: string): Promise<void>
}

export interface ConversationTurn {
  role: 'companion' | 'person'
  text: string
}

export interface AiConversation {
  readonly available: false
  reply(turns: readonly ConversationTurn[]): Promise<null>
}
