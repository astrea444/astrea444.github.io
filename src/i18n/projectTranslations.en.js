
export default {
  1: {
    title: 'MNIAM Mobile App',
    description:
      "MNIAM is a mobile app that helps with meal planning and everyday grocery shopping. It lets users create meal plans, save recipes, manage their home pantry, and automatically generate shopping lists — all in one place.",
    meta: [
      { label: 'Date', value: 'July–September 2026' },
      { label: 'Scope', value: 'visual identity, UI/UX design, frontend (in progress)' },
    ],
    sections: {
      visualIdentity: {
        title: 'Visual direction and interface system',
        description:
          "The visual direction is built on simple, soft shapes and a color palette that evokes freshness and food. Green takes the lead role, paired with a light background and a dark navy that provides enough contrast for key content.",
        afterText:
          "The interface was designed with a consistent set of components, typography, and spacing rules. Soft rounded corners and subtle shadows give the whole thing a light feel while keeping the information structure easy to read. Typography adapts across screen sizes for a comfortable experience on any device.",
      },
      problem: {
        title: 'The problem MNIAM solves',
        blocks: [
          {
            paragraphs: [
              "Meal planning, grocery shopping, and keeping track of what's at home usually means juggling several different tools. Users have to remember what's in the pantry, what's missing, which meals they want to cook, and what to buy.",
              "The real problem isn't any single task — it's constantly moving information between them. An item on the shopping list isn't automatically linked to the pantry's stock, and a planned recipe still requires manually checking which ingredients are on hand.",
              "MNIAM's goal was to bring these processes together into one coherent system. The app reuses information the user enters across different parts of the app, cutting down on repeating the same task multiple times.",
            ],
          },
          { alt: 'Problem - Solution - Result' },
        ],
      },
      process: {
        title: 'Design principles and process',
        blocks: [
          {
            paragraphs: [
              "MNIAM was created as a response to the everyday hassle of planning meals, organizing shopping, and keeping tabs on what's at home. The goal was a single app that ties these tasks together into one simple, coherent flow.",
              "While designing, I paid special attention to reducing the number of steps required from the user. The shopping list is generated from planned meals, and manually adding items comes with helpful suggestions. Once shopping is done, checked-off items can be moved straight into the pantry without re-entering the same information.",
              "The main flow is built on a natural chain of features: from planning meals and picking recipes, through building the shopping list, to updating the home pantry. The goal was a system where each stage supports the next and repetitive work is kept to a minimum.",
            ],
          },
          { alt: "Mockup of the app's main screens" },
        ],
      },
      decisions: {
        title: 'Design decisions and solutions',
        blocks: [
          {
            paragraphs: [
              "While designing the product list, a problem came up around showing three statuses: a short expiration date, low quantity, and recently added items. I initially placed them as chips right next to the product name, but with longer names this forced truncation and hurt readability.",
              'To quickly compare alternative layouts, I used an AI interface-prototyping tool, which generated three options: an icon-only variant, a variant with the chips moved below the product name, and a variant that dropped the "New" chip in favor of a color-coded status.',
              "I ruled out the icon-only variant since it would be unintuitive for users. I also preferred to keep marking new items the original way, for consistency. In the end I picked and refined the second variant — chips below the name — over my own original layout. This kept product names fully visible while making the statuses clear at a glance.",
            ],
          },
          { alt: 'Comparison of product status variants' },
        ],
      },
      pantry: {
        title: 'Managing the home pantry',
        blocks: [
          {
            paragraphs: [
              "The pantry is one of the app's core features, letting users keep track of what's at home. Items are grouped into basic categories, which makes browsing and organizing them easier.",
              "While designing this module I focused on making common actions fast. Users can easily adjust a product's quantity, mark it as used, and update the pantry's contents without wading through long forms.",
              "The interface uses simple units and intuitive controls, so managing items doesn't mean manually typing in every exact value. Important flags — like an approaching expiration date or a product running low — are highlighted so they stand out during everyday use.",
            ],
          },
        ],
      },
      recipes: {
        title: 'Recipes and meal planning',
        blocks: [
          {
            paragraphs: [
              "The recipes module was designed as a tool for everyday meal planning. Users can browse available recipes, save the ones they like, and add them to their own meal plan.",
              "A clear information hierarchy mattered most when designing the recipe cards. Key details — prep time, difficulty, and the ingredient list — are laid out in an organized way. Ingredients are also split between what's already in the pantry and what still needs to go on the shopping list.",
              "Selected meals form the basis for automatically generating the shopping list. By linking planning, recipes, and the pantry together, users don't have to manually go through each recipe and build a list of missing ingredients themselves.",
            ],
          },
        ],
      },
      development: {
        title: 'Project progress',
        blocks: [
          {
            paragraphs: [
              "I've been developing MNIAM on both the design and technical side in parallel. The Discovery & UX phase covered identifying the core problems, analyzing existing solutions, designing the flows, and building a complete interface and design system.",
              "The project is now at the frontend implementation stage. The app's main views and features are already built in Vue 3 with Pinia, Vue Router, SCSS, and Local Storage. What's left includes polishing the existing views and finishing onboarding and login.",
              "The next stage is building the backend and moving data from local storage to a solution that supports user accounts and data sync. Eventually the project will go through testing and be prepared for release.",
            ],
          },
          { alt: 'Project roadmap' },
          { alt: 'Onboarding mockups' },
        ],
      },
      uiShowcase: {
        title: 'Selected interface views',
        blocks: [
          {
            paragraphs: [
              "The views below show selected parts of the final interface and how the visual principles defined earlier were applied. The project relies on a consistent grid, uniform typography, and reusable components, so every screen keeps the same look and feel.",
              "States that need extra communication with the user were also considered, such as onboarding, empty states, and basic profile and data-management screens. Each was designed to clearly communicate the app's current state and point toward the next possible action.",
            ],
          },
          { alt: 'Selected views' },
        ],
      },
    },
  },
 
  2: {
    title: 'GOK Brass Band in Kuryłówka',
    description:
      "A website design for the GOK Brass Band in Kuryłówka, aimed at creating a clear, modern site to showcase the band's activities, history, and current events.\n\nThe design blends the band's elegant character with a simple, convenient information structure that works well on both desktop and mobile.",
    meta: [
      { label: 'Date', value: 'April 2026' },
      { label: 'Scope', value: 'UI Design, Responsive Web Design, Iconography' },
    ],
    sections: {
      visualIdentity: {
        title: 'Visual direction',
        description:
          "The design is built on an elegant, calm aesthetic that fits the band's character. A light background, a deep burgundy palette, and classic typography evoke the atmosphere of live performances while keeping the interface simple and easy to read.",
        afterText:
          "For typography I used Corinthia as a distinctive visual element that nods to the project's musical character, paired with Libre Caslon Text, whose classic form keeps larger blocks of text easy to read.\n\nThe project covered the complete site interface in both desktop and mobile versions, including the subpage layouts and the set of graphic elements used throughout the site.",
      },
      process: {
        title: 'Design principles',
        paragraphs: [
          "The project set out to refresh how the band presents itself online. The main goal was an organized site that lets locals and potential event organizers quickly find the information they need.",
          "While designing, I focused on balancing the band's more classical musical character with a modern way of presenting content. The interface needed to look elegant while staying easy to take in.",
          "The project covered eight main views, each built for both desktop and mobile. I paid particular attention to keeping the content readable and the layout consistent across screen sizes.",
        ],
        image: { alt: 'Mockup of the site on a tablet' },
      },
      customIcons: {
        title: 'Custom iconography',
        paragraphs: [
          "For the site I created a set of icons depicting the instruments the band plays. Instead of using stock symbols, I designed original illustrations that match the interface's overall style.",
          "The process started with photos of the actual instruments, which I then simplified into vector shapes. The final step was adding a subtle brush effect so the icons would fit the project's more artistic character.",
          "The icons are used in the instruments section, helping visually organize information about the band's lineup.",
        ],
        images: [
          { alt: 'Flute icon' },
          { alt: 'Cymbals icon' },
          { alt: 'Drum icon' },
          { alt: 'Trumpet icon' },
          { alt: 'Snare drum icon' },
          { alt: 'Trombone icon' },
          { alt: 'Tuba icon' },
          { alt: 'Saxophone icon' },
          { alt: 'Clarinet icon' },
          { alt: "Conductor's hands icon" },
        ],
      },
      desktop: {
        title: 'Interface design',
        paragraphs: [
          "The project covers the homepage, the band's history, the lineup, a photo gallery, video content, a news section with individual post views, and a contact section.",
          "Each view was designed using a consistent set of interface elements, so the whole site keeps a unified look no matter which page you're on.",
        ],
        image: { alt: 'Site mockups' },
      },
      mobile: {
        title: 'Responsiveness',
        paragraphs: [
          "The design also includes a mobile version adapted for smaller screens. The main priority was keeping the content readable and the site comfortable to use on mobile devices.",
          "Interface elements were rescaled and rearranged to stay consistent with the desktop version without losing any functionality.",
        ],
        image: { alt: 'Mobile version of the site' },
      },
    },
  },
 
  3: {
    title: 'Youth Municipal Council in Aleksandrów Łódzki',
    description:
      "A complete visual identity project for the Youth Municipal Council, built around a consistent visual language used across both print materials and digital spaces.\n\nThe goal was modern, approachable communication aimed at a young audience, while still keeping the character of an official organization.",
    meta: [
      { label: 'Date', value: 'January–February 2025' },
      { label: 'Scope', value: 'visual identity, UI design, promotional materials' },
    ],
    sections: {
      visualIdentity: {
        title: 'Visual identity',
        description:
          "The final mark is built from two silhouettes symbolizing cooperation and community. Together their shape forms the letter \"M,\" tying the logo directly to the organization's name.\n\nThe rounded construction keeps the design approachable while staying legible and appropriate for an official organization.",
        afterText:
          "The color palette is based on the city's colors, taken from Aleksandrów Łódzki's coat of arms and flag. Geometric patterns inspired by local design were added as an extra element, used mainly on the youth cards.\n\nThe typography pairs the more distinctive Anybody with the simple, readable Work Sans, giving the identity a youthful character without losing a professional look.",
      },
      printMaterials: {
        title: 'Print and promotional materials',
        images: [
          { alt: 'Youth Card variant' },
          { alt: 'Roll-up banner' },
          { alt: 'Youth Cards' },
          { alt: 'Posters, invitations, notebook, pin, and pen' },
          { alt: 'Sticker: "Youth Card Honored Here"' },
          { alt: 'Notebooks' },
        ],
      },
      process: {
        title: 'Design process',
        paragraphs: [
          "The project grew in stages. It initially covered only the youth card design, but the scope expanded during the work to include a full visual identity, promotional materials, and a website.",
          "While designing, I looked for a balance between the official character of an organization tied to local government and a more open communication style aimed at young people. I tested several visual directions, focusing mainly on the theme of community and cooperation.",
          "The final mark combines two silhouettes with the letter \"M,\" so the identity ties directly to the organization's name while staying a simple, recognizable symbol.",
        ],
        image: { alt: 'Logo variations' },
      },
      website: {
        title: 'Website',
        paragraphs: [
          "The website was designed as the main communication hub for the Youth Municipal Council and its youth card program. The top priority was organizing the information clearly and making it easy for users to go through the card application process.",
          "The visual layer builds on the identity created earlier. A light background, bold colors, and a modular layout kept it consistent with the print materials.",
          "The project covers the organization's info page, the application process, instructions for getting the card, the terms and conditions, contact information, and an admin panel for managing submissions, searching users, and reviewing basic stats.",
        ],
        image: { alt: 'Panel login' },
      },
    },
  },
 
  4: {
    title: 'Admin Dashboard',
    description:
      "An admin interface for monitoring server activity, managing users, and controlling the permission system. It was designed as a modern SPA with a dark interface, a clear information structure, and a focus on handling large amounts of data comfortably.",
    meta: [
      { label: 'Date', value: 'June–July 2025' },
      { label: 'Scope', value: 'Frontend Development, UI Design' },
      { label: 'Repository', value: 'https://github.com/astrea444/admin-panel' },
    ],
    sections: {
      project: {
        title: 'Project goals',
        paragraphs: [
          "The project was built around client requirements defining the admin panel's functionality. The interface has a modern look with the dark theme typical of this kind of tool.",
          "I started by designing the project in Figma, then implemented the entire frontend in Vue 3. The app was built as an SPA using mock data and structures ready for later backend integration.",
          "I put the most emphasis on interface clarity and comfortable work with large amounts of data. Keeping a consistent look across all views and components mattered too.",
        ],
        image: { alt: 'Admin panel mockup' },
      },
      visualIdentity: {
        title: 'Visual direction',
        description:
          "The design follows a modern aesthetic inspired by admin app interfaces. A dark color scheme, strong contrast, and a limited set of accent colors keep the focus on the data and the system's key functions.",
        afterText:
          "I used the Inter font, whose high readability works well in apps that display large amounts of data. The project included building a complete system of components, forms, tables, cards, and navigation elements used across every view in the panel.",
      },
      interfaceDesign: {
        title: 'Interface design',
        paragraphs: [
          "The interface was designed with administrators doing repetitive tasks in mind. Features are split into logical sections, making it easier to find information and navigate the app.",
          "While designing, I focused on proper information hierarchy, clear spacing, and limiting how many elements are visible at once. This keeps even complex views easy to scan.",
          "The logs system lets admins switch between grid and list views, so they can choose whichever presentation fits their current task best.",
        ],
        groups: [
          { images: [{ alt: 'Login' }, { alt: 'Home screen' }], caption: 'Login and home screen' },
          { images: [{ alt: 'Logs in grid view' }, { alt: 'Logs in list view' }], caption: 'Logs system' },
          { images: [{ alt: 'User list' }, { alt: 'Permissions management' }], caption: 'User management' },
        ],
      },
      implementation: {
        title: 'Implementation',
        paragraphs: [
          "After finishing the design stage, I implemented the entire frontend using Vue 3, Vite, Pinia, and Vue Router. Each view was broken down into smaller components, making the app easier to develop further.",
          "The project uses mock data and a prepared API communication layer, so it can be extended with a real backend without rebuilding the interface.",
        ],
        image: { alt: 'Login page' },
      },
    },
    techStack: {
      title: 'Technologies',
    },
  },
}
 