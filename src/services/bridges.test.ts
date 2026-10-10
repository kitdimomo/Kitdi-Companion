import { describe, expect, it } from 'vitest'
import { createUnavailableAiConversation } from './ai.ts'
import { createUnconnectedHardwareBridge } from './hardware.ts'
import { createSilentVoiceBridge } from './voice.ts'

describe('service bridges', () => {
  it('stays disconnected until hardware, voice, or a model is added', async () => {
    const hardware = createUnconnectedHardwareBridge()
    const voice = createSilentVoiceBridge()
    const ai = createUnavailableAiConversation()

    expect(hardware.connected).toBe(false)
    expect(voice.listening).toBe(false)
    expect(ai.available).toBe(false)
    await expect(hardware.readTouch()).resolves.toBeNull()
    await expect(hardware.showOnDisplay('hello')).resolves.toBeUndefined()
    await expect(voice.transcribe()).resolves.toBeNull()
    await expect(voice.speak('hello')).resolves.toBeUndefined()
    await expect(ai.reply([])).resolves.toBeNull()
  })
})
