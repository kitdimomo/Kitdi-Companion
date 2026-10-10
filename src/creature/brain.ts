import type {
  BrainReply,
  BrainRequest,
  MemoryRecord,
  PersonalityProfile,
} from '../types/creature.ts'

/**
 * Conversation, personality, memories, and decisions.
 * The offline brain refuses work instead of calling a model.
 */
export interface CreatureBrain {
  describePersonality(): PersonalityProfile
  listMemories(): readonly MemoryRecord[]
  consider(request: BrainRequest): BrainReply
}

export const offlineBrain: CreatureBrain = {
  describePersonality() {
    return {
      name: 'Kitdi',
      summary: 'Personality is not written yet. The creature can still be present without it.',
    }
  },
  listMemories() {
    return []
  },
  consider(_request) {
    return { handled: false, reason: 'brain-offline' }
  },
}
