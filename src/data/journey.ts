export interface Resource {
  title: string
  description: string
  href: string
}

export interface Stage {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  details: string[]
  resources: Resource[]
}

// Demo content — replace stage copy, photos, and resource links with the
// real cabin's restoration story and files when they're ready.
export const journeyStages: Stage[] = [
  {
    id: 'inspection',
    number: '01',
    title: 'Inspection & Assessment',
    tagline: 'Know exactly what the cabin needs before touching a single log.',
    description:
      'Every restoration starts with a full walk of the structure — checking each log, corner, and joint for rot, moisture intrusion, and finish failure so the plan is built on facts, not guesswork.',
    details: [
      'Moisture-meter readings at sill logs, corners, and window returns',
      'Probe test for soft or rotted wood beneath the surface',
      'Photo documentation of every problem area, logged by location',
      'Honest scope and estimate — no surprises once work begins',
    ],
    resources: [
      {
        title: 'Example: Inspection checklist (PDF)',
        description: 'Placeholder — swap in the real walkthrough checklist for this cabin.',
        href: '#',
      },
      {
        title: 'Example: Photo log from this stage',
        description: 'Placeholder — link to the before-photos folder once uploaded.',
        href: '#',
      },
    ],
  },
  {
    id: 'media-blasting',
    number: '02',
    title: 'Media Blasting & Stripping',
    tagline: 'Strip away decades of failed finish down to clean, healthy wood.',
    description:
      'Old stain, mildew, and UV-damaged wood fiber are removed using low-pressure glass media blasting or controlled chemical stripping — whichever is gentler on the specific logs involved.',
    details: [
      'Low-pressure glass media blasting for most exterior log surfaces',
      'Chemical stripping in tight or delicate areas where blasting is too aggressive',
      'Surface left bare and ready to reveal the wood underneath',
      'Containment and cleanup to protect landscaping and surrounding areas',
    ],
    resources: [
      {
        title: 'Example: Media blasting vs. stripping guide',
        description: 'Placeholder — link to the article comparing methods for this cabin.',
        href: '#',
      },
    ],
  },
  {
    id: 'repair',
    number: '03',
    title: 'Wood Repair & Log Replacement',
    tagline: 'Stop decay at the source and rebuild what can’t be saved.',
    description:
      'With the wood exposed, real damage is easy to see. Rotted sections are dug out, treated, and either epoxied, patched, or replaced with matching material — and borate treatment guards against future insect and rot damage.',
    details: [
      'Borate treatment applied to stop active rot and deter insects',
      'Epoxy consolidation and Dutchman patches for isolated soft spots',
      'Full log or partial-log replacement where damage is structural',
      'Profile and species matched so repairs blend into the original logs',
    ],
    resources: [
      {
        title: 'Example: Repair scope & materials list',
        description: 'Placeholder — link to the specific repair plan for this cabin.',
        href: '#',
      },
    ],
  },
  {
    id: 'chinking',
    number: '04',
    title: 'Chinking & Caulking',
    tagline: 'Seal every joint so the cabin stays dry, warm, and efficient.',
    description:
      'Chinking is the flexible seal between logs — it takes the brunt of the home’s movement over time. Failed or cracked chinking is removed and replaced with a weather-tight system built to flex with the seasons.',
    details: [
      'Old, cracked chinking and backer rod removed',
      'New backer rod sized to each joint for proper chink depth',
      'Perma-Chink or equivalent flexible sealant applied and tooled',
      'Log-end caulking at all corners and butt joints',
    ],
    resources: [
      {
        title: 'Example: Why chinking cracks (and when to reseal)',
        description: 'Placeholder — link to the troubleshooting guide.',
        href: '#',
      },
    ],
  },
  {
    id: 'staining',
    number: '05',
    title: 'Staining & Sealing',
    tagline: 'Lock in protection against UV, moisture, and time.',
    description:
      'A premium, breathable finish is applied in multiple coats to protect bare wood from sun and water damage — the single biggest factor in how long the restoration will last.',
    details: [
      'Borate or preservative pre-treatment where needed',
      'Base and topcoats of a premium penetrating or film-forming stain',
      'Attention to end grain, corners, and other high-wear areas',
      'Cure time and coat count matched to product and climate',
    ],
    resources: [
      {
        title: "Example: Owner's guide to log home stain",
        description: 'Placeholder — link to the full stain guide once available.',
        href: '#',
      },
      {
        title: 'Example: Product spec sheet',
        description: 'Placeholder — link to the manufacturer data sheet for the stain used.',
        href: '#',
      },
    ],
  },
  {
    id: 'maintenance',
    number: '06',
    title: 'Ongoing Maintenance',
    tagline: 'Protect the investment for decades, not just this season.',
    description:
      'Restoration work is only as good as the care that follows it. Annual inspections catch small issues — a hairline chink crack, an early sign of graying finish — before they become expensive problems.',
    details: [
      'Annual inspection of chinking, caulking, and finish condition',
      'Spot touch-ups before small issues spread',
      'Seasonal checklist for the homeowner between visits',
      'Long-term record of what was done, where, and when',
    ],
    resources: [
      {
        title: 'Example: Seasonal maintenance checklist',
        description: 'Placeholder — link to the printable checklist for this cabin.',
        href: '#',
      },
    ],
  },
]
