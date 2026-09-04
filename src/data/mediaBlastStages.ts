export interface Resource {
  title: string
  description: string
  href: string
}

export interface Stage {
  id: string
  progress: number
  number: string
  name: string
  body: string
  resources: Resource[]
}

export const stages: Stage[] = [
  {
    id: 'needs-maintenance',
    progress: 0,
    number: '01',
    name: 'Needs Maintenance',
    body: 'Sun-bleached and greying. The surface film has failed and the timber underneath is starting to check.',
    resources: [
      {
        title: 'Example: Reading the warning signs',
        description: 'Placeholder — link to the guide on spotting finish failure early.',
        href: '#',
      },
    ],
  },
  {
    id: 'media-blasted',
    progress: 0.183,
    number: '02',
    name: 'Media Blasted',
    body: 'Crushed glass strips the dead coating back to bare, sound wood without scoring the grain.',
    resources: [
      {
        title: 'Example: Media blasting vs. stripping',
        description: 'Placeholder — link to the article comparing removal methods.',
        href: '#',
      },
    ],
  },
  {
    id: 'borate-treatment',
    progress: 0.306,
    number: '03',
    name: 'Borate Treatment',
    body: 'Board Defense soaks into the open grain while it will still take it — rot and boring-insect protection at depth.',
    resources: [
      {
        title: 'Example: Product spec sheet',
        description: 'Placeholder — link to the Board Defense data sheet.',
        href: '#',
      },
    ],
  },
  {
    id: 'gap-cap',
    progress: 0.43,
    number: '04',
    name: 'Gap Cap',
    body: 'Closed-cell backer rod is pressed into every seam, setting joint depth so the sealant bonds on two faces, not three.',
    resources: [
      {
        title: 'Example: Why joint depth matters',
        description: 'Placeholder — link to the backer rod technique notes.',
        href: '#',
      },
    ],
  },
  {
    id: 'conceal',
    progress: 0.554,
    number: '05',
    name: 'Conceal',
    body: 'Chinking is tooled over the rod — a weather-tight joint that still flexes as the logs move through the seasons.',
    resources: [
      {
        title: 'Example: Why chinking cracks (and when to reseal)',
        description: 'Placeholder — link to the chinking troubleshooting guide.',
        href: '#',
      },
    ],
  },
  {
    id: 'stain-topcoat',
    progress: 0.677,
    number: '06',
    name: 'Stain & Topcoat',
    body: 'Pigmented stain carries the UV package; the clear topcoat over it takes the weather and the wear.',
    resources: [
      {
        title: "Example: Owner's guide to log home stain",
        description: 'Placeholder — link to the full stain guide once available.',
        href: '#',
      },
    ],
  },
  {
    id: 'protected-home',
    progress: 0.8,
    number: '07',
    name: 'Protected Home',
    body: 'Sealed, shedding water, warm from the inside. Back on a maintenance cycle instead of a rescue.',
    resources: [
      {
        title: 'Example: Seasonal maintenance checklist',
        description: 'Placeholder — link to the printable checklist for this cabin.',
        href: '#',
      },
    ],
  },
]
