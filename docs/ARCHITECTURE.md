# Architecture

Kitdi is a hybrid companion: a digital creature and, later, a small desktop device. Both should share personality, memories, and internal state. This repository only sets the boundaries those pieces will grow inside.

The creature is three systems. They can be reasoned about separately. Instincts and Body are enough for the creature to be on screen. Brain is optional, and a model is never required just to keep the creature present.

Hardware is not a fourth system inside the core. A desk unit is a client of the same state, attached through `src/services`.

## Creature Body

Body is presentation: animations, expressions, and visual reactions, once those exist. The current `CreatureBody` lives in `src/creature/body.ts`. `expressionFor` returns a reserved placeholder. It does not draw a character and it does not animate.

Body does not decide mood. It does not open sockets, speakers, or microphones. A future display on the printed companion should mirror an expression Body already chose, via an adapter in `src/services`.

## Creature Instincts

Instincts are the autonomous core: emotion, energy, curiosity, attention, and sleep. They publish an `InstinctSnapshot` from `src/creature/instincts.ts`. The Zustand store in `src/state/creatureStore.ts` holds that snapshot, and `useCreatureStatus` lets the window read it.

The first snapshot is a fixed resting state: awake, calm, with energy, curiosity, and attention already filled in. There is no timer, no tick, and no behaviour loop. Later, Instincts can update the store on their own schedule. That schedule must not require a network call. If the network is down, or no model is configured, the creature still has a status.

## Creature Brain

Brain is reserved for conversation, personality, memories, and decisions. `src/creature/brain.ts` exposes `CreatureBrain`. The offline implementation describes a personality that is not written yet, returns no memories, and answers `consider` with `handled: false` and `reason: "brain-offline"`.

Nothing on the render path calls Brain. The status line comes from Instincts. When a model is added, Brain should reach it through `src/services` and only for moments that need language or a decision: a reply, a recollection, a choice. Keeping the creature breathing, blinking, or asleep is Instincts' job, not an API call.

## How the three communicate

```
Instincts  --snapshot-->  store  --read-->  window
                |
                +----snapshot----> Body (expression, later animation)

Brain reads a snapshot only when a decision or a conversation needs it.
Body does not call Brain in order to render.
Brain does not own the snapshot.
```

- Instincts are the source of the snapshot.
- The store is a read model for the interface. It is not a second brain and it does not talk to devices.
- Body may read a snapshot when it needs an expression. It does not own the numbers underneath.
- Brain may later read the same snapshot and return an intent. Until it is online, `consider` refuses and the caller continues with Instincts alone.
- No step in this path performs an AI request.

A suggested intent from Brain, when one exists, should be a plain value the Instincts or Body can accept or ignore. Brain should not reach into the DOM, and Body should not reach into a model client.

## Hardware stays outside the core

`src/services` holds the future edges:

- `hardware.ts` — display, touch, and the desk unit connection
- `voice.ts` — microphone and speaker
- `ai.ts` — a conversation client Brain may use later

Each one ships as a stub that reports nothing is attached. Shared contracts for those stubs live in `src/types/services.ts`. Creature contracts live in `src/types/creature.ts`.

`src/creature` does not import `src/services`. A device adapter may import creature types and the store. The other direction would tie mood, sleep, and expression to a particular board or vendor SDK.

The browser window and the printed companion are both clients. The window renders the snapshot with React. The desk unit will render it through the hardware bridge. Neither client is the place where mood is invented.

## The creature without a constant AI connection

Presence does not depend on Brain.

1. Instincts publish a snapshot from local state.
2. The store keeps the latest snapshot.
3. Body and the window render from that snapshot.

Conversation, memory retrieval, and voiced replies can fail or stay unconfigured. The snapshot still exists, and the window can still show it. Prototype work that adds a model must keep this path intact: booting the app, and leaving it open, must not require an API key or a successful request.

## Layout

| Path | Role |
| --- | --- |
| `src/components` | Window layout, reserved creature space, status line |
| `src/creature` | Body, Instincts, and Brain |
| `src/state` | Shared snapshot |
| `src/hooks` | React bindings over the store |
| `src/services` | AI, voice, and hardware adapters |
| `src/types` | Contracts shared by the systems above |
| `src/styles` | Plain CSS |
| `src/assets` | Future visual and audio files |
| `docs` | Architecture and roadmap |
