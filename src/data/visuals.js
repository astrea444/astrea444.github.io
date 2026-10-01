export const visualsIntro = {
  title: 'Eksperymenty',
  description:
    "Projekty personalne, eksperymenty i ćwiczenia z grafiki oraz UI. Testuję tu nowe pomysły, style i rozwiązania, których nie zawsze mam okazję wykorzystać w pracy komercyjnej."
}

export const visualSets = [
  {
    id: 'task-app',
    title: 'Aplikacja To-Do',
    tags: ['UI/UX'],
    isNew: true,
    meta: [
      { label: 'Format', value: 'Koncept aplikacji desktopowej' },
      { label: 'Zakres', value: 'UI/UX Design' },
      { label: 'Data', value: '2025' }
    ],
    description: [
      "Koncept aplikacji desktopowej do zarządzania zadaniami, skupiony na przejrzystym interfejsie i wygodnej organizacji pracy. Szczegóły projektu oraz proces projektowy zostaną przedstawione wkrótce."
    ],
    images: []
  },
  {
    id: 'piatto-rustico',
    title: 'Włoska restauracja',
    tags: ['Branding', 'Graphic Design'],
    isNew: false,
    color: '#FEF2E0',
    meta: [
      { label: 'Format', value: 'Koncept marki' },
      { label: 'Zakres', value: 'logo, menu, social media, baner' },
      { label: 'Data', value: '2024' }
    ],
    description: [
      'Koncept fikcyjnej włoskiej restauracji i ćwiczenie z budowania spójnej identyfikacji wizualnej. Zależało mi na ciepłym, rzemieślniczym charakterze zamiast typowych skojarzeń z włoskim stylem.',
      'Identyfikacja obejmuje logo, kolory, wzór oraz materiały do social mediów i promocji.'
    ],
    images: [
      { src: '/assets/visuals/piatto-rustico/logotype.webp', w: 8, h: 4 },
      { src: '/assets/visuals/piatto-rustico/colors.webp', w: 6, h: 2 },
      { src: '/assets/visuals/piatto-rustico/posts.webp', w: 8, h: 4 },
      { src: '/assets/visuals/piatto-rustico/menu.webp', w: 8, h: 6 },
      { src: '/assets/visuals/piatto-rustico/pattern.webp', w: 3, h: 2 },
      { src: '/assets/visuals/piatto-rustico/banner.webp', w: 6, h: 8.5 },
    ]
  },
  {
    id: 'hype-scripts',
    title: 'Digital studio',
    tags: ['Branding', 'Graphic Design'],
    isNew: false,
    color: '#EEEFFB',
    meta: [
      { label: 'Format', value: 'Koncept marki' },
      { label: 'Zakres', value: 'logo, grafiki na stronę i Instagram' },
      { label: 'Data', value: '2024' }
    ],
    description: [
      'Koncept marki dla małego studia tworzącego produkty cyfrowe. Ćwiczenie polegało na stworzeniu wyrazistego języka wizualnego dla technologicznej marki bez korzystania z typowych, „developerskich” schematów.',
      'Projekt obejmuje logo, banery, miniatury oraz grafiki na stronę i Instagram.'
    ],
    images: [
      { src: '/assets/visuals/hype-scripts/logotype.webp', w: 5, h: 3 },
      { src: '/assets/visuals/hype-scripts/banner_m.webp', w: 4, h: 3 },
      { src: '/assets/visuals/hype-scripts/ig_post_1.webp', w: 3, h: 3 },
      { src: '/assets/visuals/hype-scripts/colors.webp', w: 4.5, h: 1 },
      { src: '/assets/visuals/hype-scripts/banner_xl.webp', w: 7, h: 2 },
      { src: '/assets/visuals/hype-scripts/banner_s.webp', w: 4, h: 2 },
      { src: '/assets/visuals/hype-scripts/ig_post_2.webp', w: 3, h: 3 },
      { src: '/assets/visuals/hype-scripts/thumbnails.webp', w: 3, h: 5 },
      { src: '/assets/visuals/hype-scripts/banner_xxl.webp', w: 6, h: 3 },
      { src: '/assets/visuals/hype-scripts/banner_l.webp', w: 6, h: 2 },
    ]
  },
]