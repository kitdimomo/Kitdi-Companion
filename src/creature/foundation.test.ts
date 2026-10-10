import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { useCreatureStore } from '../state/creatureStore.ts'
import { offlineBrain } from './brain.ts'
import { placeholderBody } from './body.ts'
import { readInstinctStatus } from './instincts.ts'

describe('creature foundation', () => {
  it('exposes a calm waking status without running a behaviour loop', () => {
    const status = readInstinctStatus()

    expect(status).toEqual({
      emotion: 'calm',
      energy: 0.72,
      curiosity: 0.4,
      attention: 0.35,
      asleep: false,
    })
    expect(useCreatureStore.getState().status).toEqual(status)
  })

  it('keeps a visible placeholder while the brain stays offline', () => {
    const expression = placeholderBody.expressionFor(readInstinctStatus())
    const reply = offlineBrain.consider({
      kind: 'decide',
      note: 'choose a next gesture',
    })

    expect(expression).toEqual({ id: 'placeholder', label: 'Reserved space' })
    expect(reply).toEqual({ handled: false, reason: 'brain-offline' })
    expect(offlineBrain.listMemories()).toEqual([])
    expect(offlineBrain.describePersonality().name).toBe('Kitdi')
  })

  it('does not import hardware, voice, or AI services into the creature core', () => {
    const directory = join(process.cwd(), 'src/creature')
    const files = readdirSync(directory).filter(
      (name) => name.endsWith('.ts') && !name.endsWith('.test.ts'),
    )

    expect([...files].sort()).toEqual(['body.ts', 'brain.ts', 'instincts.ts'])

    for (const name of files) {
      const source = readFileSync(join(directory, name), 'utf8')
      expect(source).not.toMatch(/from ['"].*services/)
    }
  })
})
