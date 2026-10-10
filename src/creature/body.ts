import type { Expression, InstinctSnapshot } from '../types/creature.ts'

/** Visual surface of the creature. Presentation only; it does not decide mood. */
export interface CreatureBody {
  expressionFor(status: InstinctSnapshot): Expression
}

export const placeholderBody: CreatureBody = {
  expressionFor(_status) {
    return {
      id: 'placeholder',
      label: 'Reserved space',
    }
  },
}
