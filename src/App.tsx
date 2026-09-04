import logo from './assets/logo.png'
import { CinematicJourney } from './components/CinematicJourney'
import { SiteFooter } from './components/SiteFooter'
import { StageNotes } from './components/StageNotes'
import { stages } from './data/mediaBlastStages'

// Rendered frame sequence in public/frames/ (f000.jpg...f239.jpg). Served at
// the site root by Vite, so referenced here as root-relative paths.
const FRAME_COUNT = 240
const frames = Array.from({ length: FRAME_COUNT }, (_, i) => `/frames/f${String(i).padStart(3, '0')}.jpg`)

function App() {
  return (
    <div className="w-full bg-cream text-body">
      <CinematicJourney
        stages={stages}
        logo={logo}
        kicker="Seven stages · scroll to run"
        title="The Media Blast Journey"
        frames={frames}
      />
      <StageNotes stages={stages} />
      <SiteFooter />
    </div>
  )
}

export default App
