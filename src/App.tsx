import { CinematicJourney } from './components/CinematicJourney'
import { SiteFooter } from './components/SiteFooter'
import { StageNotes } from './components/StageNotes'
import { stages } from './data/mediaBlastStages'

function App() {
  return (
    <div className="w-full bg-bg text-ink">
      <CinematicJourney
        stages={stages}
        brand="Log & Timber"
        brandAccent="Worx"
        kicker="Seven stages · scroll to run"
        title="The Media Blast Journey"
      />
      <StageNotes stages={stages} />
      <SiteFooter />
    </div>
  )
}

export default App
