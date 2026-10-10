import type { AiConversation } from '../types/services.ts'

export function createUnavailableAiConversation(): AiConversation {
  return {
    available: false,
    async reply(_turns) {
      return null
    },
  }
}
