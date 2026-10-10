# Kitdi

Kitdi is a small original companion: a digital creature now, and later a 3D-printed desk unit with a display, speaker, microphone, touch, and Wi-Fi. Both are meant to share personality, memories, and internal state.

This repository is the first setup. The window shows a reserved space and a status line taken from a fixed instinct snapshot. There is no character design, no behaviour loop, and no AI call. Body, Instincts, and Brain are separate, and hardware adapters stay outside the creature core.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

The dev server listens on port 43123. Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run typecheck
npm run lint
npm test
```

Copy `.env.example` to `.env` only when a later integration needs it. The example file has empty placeholders and no secrets. The app runs with nothing set.

## Where to read next

- [Architecture](docs/ARCHITECTURE.md) — how Body, Instincts, and Brain stay apart, and why the creature does not need a constant AI connection.
- [Roadmap](docs/ROADMAP.md) — prototypes from the digital character through the hybrid desk companion.

## License

MIT. Copyright 2026 Ro Cat.
