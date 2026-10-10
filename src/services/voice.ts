import type { VoiceBridge } from '../types/services.ts'

export function createSilentVoiceBridge(): VoiceBridge {
  return {
    listening: false,
    async transcribe() {
      return null
    },
    async speak(_phrase) {
      return undefined
    },
  }
}
