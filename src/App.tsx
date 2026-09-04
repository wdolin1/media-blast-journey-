import logo from './assets/logo.png'
import { CinematicJourney } from './components/CinematicJourney'
import { SiteFooter } from './components/SiteFooter'
import { StageNotes } from './components/StageNotes'
import { stages } from './data/mediaBlastStages'

function App() {
  return (
    <div className="w-full bg-cream text-body">
      <CinematicJourney stages={stages} logo={logo} kicker="Seven stages · scroll to run" title="The Media Blast Journey" />
      <StageNotes stages={stages} />
      <SiteFooter />
    </div>
  )
}

export default App
