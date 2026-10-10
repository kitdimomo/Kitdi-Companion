import type { InstinctSnapshot } from '../types/creature.ts'

/** Resting snapshot for this setup. No timers and no behaviour loop. */
export const restingInstincts: InstinctSnapshot = {
  emotion: 'calm',
  energy: 0.72,
  curiosity: 0.4,
  attention: 0.35,
  asleep: false,
}

export function readInstinctStatus(): InstinctSnapshot {
  return { ...restingInstincts }
}
