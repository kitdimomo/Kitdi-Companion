import { useCreatureStore } from '../state/creatureStore.ts'
import type { InstinctSnapshot } from '../types/creature.ts'

export function useCreatureStatus(): InstinctSnapshot {
  return useCreatureStore((state) => state.status)
}
