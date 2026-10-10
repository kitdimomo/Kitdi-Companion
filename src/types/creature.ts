export type Emotion = 'calm' | 'curious' | 'sleepy' | 'alert'

/** Published by Instincts. Body may reflect it. Brain is not required to produce it. */
export interface InstinctSnapshot {
  emotion: Emotion
  /** 0 to 1. */
  energy: number
  /** 0 to 1. */
  curiosity: number
  /** 0 to 1. */
  attention: number
  asleep: boolean
}

export interface Expression {
  id: 'placeholder'
  label: string
}

export interface PersonalityProfile {
  name: string
  summary: string
}

export interface MemoryRecord {
  id: string
  summary: string
}

export type BrainRequestKind = 'converse' | 'recall' | 'decide'

export interface BrainRequest {
  kind: BrainRequestKind
  note: string
}

export interface BrainReply {
  handled: false
  reason: 'brain-offline'
}
