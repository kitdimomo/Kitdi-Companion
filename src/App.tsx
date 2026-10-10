import { CreatureStage } from './components/CreatureStage.tsx'
import { StatusIndicator } from './components/StatusIndicator.tsx'
import { useCreatureStatus } from './hooks/useCreatureStatus.ts'

export default function App() {
  const status = useCreatureStatus()

  return (
    <main className="app">
      <div className="frame">
        <header className="mast">
          <p className="eyebrow">Desktop companion</p>
          <div className="mast-row">
            <h1>Kitdi</h1>
            <StatusIndicator status={status} />
          </div>
          <p className="lede">
            A small companion for the desk and for this window. It can be here before it has a
            voice, a memory, or a form of its own.
          </p>
        </header>
        <CreatureStage />
        <p className="note">
          Instincts are holding a quiet status. The brain is offline, and no desk hardware is
          attached.
        </p>
      </div>
    </main>
  )
}
