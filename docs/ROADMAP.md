# Roadmap

Each prototype should run on its own. Later stages add a capability. They do not become a requirement for the creature to appear.

## Prototype 0.1 — Digital character

A creature on screen: a form, a few expressions, and direct reactions to a click or to someone being there. Body grows here. Instincts can stay a fixed snapshot. No model and no device.

## Prototype 0.2 — Autonomous behaviour

Instincts start updating themselves. Energy rises and falls, curiosity wanders, attention shifts, and sleep arrives. The creature keeps changing when nobody is talking to it and when no API is configured.

## Prototype 0.3 — Memory and personality

A durable personality and a small memory the creature can keep between sessions. Brain begins to store and recall. A local record is enough; a live model is not required for this step. The same records should be usable later by the desk unit.

## Prototype 0.4 — AI conversation and voice

Brain may call a conversation service for language, and a voice bridge may listen and speak. Those calls are optional. If the service is missing, Instincts and Body continue as in Prototype 0.2. Starting the app still requires no API key.

## Prototype 0.5 — Physical hardware integration

A 3D-printed desktop companion with a display, speaker, microphone, touch, and Wi-Fi. It attaches through `src/services` and consumes the same snapshot as the window. Core creature modules still do not import device code.

## Prototype 1.0 — Functional hybrid companion

The digital creature and the desk unit share personality, memories, and internal state. Someone can leave Kitdi on the desk or open the window and meet the same companion. Conversation and the network stay features on top of a creature that already has a body and instincts.
