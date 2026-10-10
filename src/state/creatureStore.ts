import { create } from 'zustand'
import { readInstinctStatus } from '../creature/instincts.ts'
import type { InstinctSnapshot } from '../types/creature.ts'

export interface CreatureStoreState {
  status: InstinctSnapshot
}

export const useCreatureStore = create<CreatureStoreState>(() => ({
  status: readInstinctStatus(),
}))
