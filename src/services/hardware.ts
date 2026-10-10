import type { HardwareBridge } from '../types/services.ts'

/** No desk unit in this build. Creature modules must not import this file. */
export function createUnconnectedHardwareBridge(): HardwareBridge {
  return {
    connected: false,
    async readTouch() {
      return null
    },
    async showOnDisplay(_message) {
      return undefined
    },
  }
}
