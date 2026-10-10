import type { InstinctSnapshot } from '../types/creature.ts'

interface StatusIndicatorProps {
  status: InstinctSnapshot
}

function percent(value: number): string {
  return `${Math.round(value * 100)}%`
}

function label(emotion: InstinctSnapshot['emotion']): string {
  return emotion.charAt(0).toUpperCase() + emotion.slice(1)
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const presence = status.asleep ? 'Asleep' : 'Awake'

  return (
    <div className="status" role="status" aria-live="polite">
      <span className="pill">
        <span className="pill-label">Presence</span>
        {presence}
      </span>
      <span className="pill">
        <span className="pill-label">Mood</span>
        {label(status.emotion)}
      </span>
      <span className="pill">
        <span className="pill-label">Energy</span>
        {percent(status.energy)}
      </span>
    </div>
  )
}
