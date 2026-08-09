// All site copy lives here, keyed by language.
// DE and EL live in src/i18n/; fields missing there fall back to EN via getContent().

import de from './i18n/de.js'
import el from './i18n/el.js'

const en = {
  nav: {
    about: 'about',
    projects: 'projects',
  },

  hero: {
    kicker: '// welcome to my portfolio',
    greeting: "hi, i'm gianni.",
    tagline: 'security-minded software developer.',
    cta: 'view projects',
    intro:
      "Hi, I'm a software developer with a strong passion for cybersecurity and full-stack development. " +
      "As a computer science master's student, I am looking for a working student position in security " +
      'engineering or software development to turn theory into secure, real-world solutions.',
  },

  about: {
    heading: 'about me',
    paragraphs: [
      'Code, networks, data, and robust IT skills: My portfolio showcases my full technical spectrum. ' +
        'I design VM-based network architectures, build modern full-stack web applications, and dive deep ' +
        'into data science and machine learning.',
      "Whether developing a mixed-reality application for my bachelor's thesis or constructing " +
        'challenging Capture The Flag (CTF) tasks, I love sinking my teeth into new technologies and ' +
        'uncovering vulnerabilities.',
      'My goal? To make digital products fundamentally more secure and efficient from the ground up. ' +
        'Scroll down to explore the individual projects and see how I apply this in practice.',
    ],
    skillsHeading: 'technical skills',
    skills: [
      { label: 'languages', value: 'Python, C, Java, Swift, JavaScript, SQL' },
      { label: 'full-stack & web', value: 'Django (REST APIs), HTML/CSS, MySQL, MongoDB' },
      { label: 'security & ML', value: 'CTF (Hack The Box), Machine Learning (PyTorch, Transformers)' },
      { label: 'mobile & 3d', value: 'iOS (SwiftUI, Combine), Unity, Reality Composer Pro, Blender' },
      { label: 'devtools', value: 'Git, Unix/Linux, Bash Scripting' },
    ],
  },

  projectsHeading: 'projects',

  projects: [
    {
      id: 'ctf',
      nr: 0,
      year: 2026,
      title: 'Cybersecurity CTF Platform',
      shortTitle: 'Cybersecurity CTF-Plattform',
      images: [
        { src: '/img/ctf/flag.png', caption: 'Flag for the second Application-Challenge' },
        { src: '/img/ctf/code.png', caption: 'Backend implementation in Django' },
        { src: '/img/ctf/cctv.png', caption: 'CCTV Challenge' },
        { src: '/img/ctf/nmap.png', caption: 'Network scanning with Nmap' },
        { src: '/img/ctf/win.png', caption: 'Capture the Flag complete' },
      ],
      paragraphs: [
        'This interactive, multi-stage Capture The Flag (CTF) challenge bridges Application Security and ' +
          'Network Security into a realistic attack scenario. The entire project is designed as a compact ' +
          '"Infrastructure as Code" package: Students can simply download the challenge as a ZIP file and ' +
          'launch it locally in an isolated environment via Vagrant with a single command: true plug & play ' +
          'without complex configurations.',
        'The entry point is a custom-built Django web application where classic web vulnerabilities must be ' +
          "identified and exploited. This successful web exploit serves as the players' springboard into the " +
          'command line (CLI). From there, they use Nmap to analyze and penetrate an isolated network of three ' +
          'virtual machines. Through this multi-VM topology, the entire infrastructure remains cross-platform ' +
          'reproducible and portable.',
      ],
      tech: [
        { label: 'Platform', value: 'Web, Virtual Machines (Multi-VM Topology)' },
        { label: 'Languages', value: 'Python, Bash, HTML/CSS' },
        { label: 'Framework', value: 'Django' },
        { label: 'Tools', value: 'Vagrant, Nmap, Git' },
      ],
    },
    {
      id: 'thesis',
      nr: 1,
      year: 2025,
      title: 'Mixed Reality App: Making Data Privacy Tangible for Children',
      shortTitle: "Immersive Mixed Reality (Bachelor's Thesis)",
      images: [
        {
          src: '/img/thesis/addison.png',
          caption:
            "a glimpse through the headset on my bachelor's thesis: a gamification approach to teaching " +
            'children about data collection on everyday-devices: listening to music spawns "information orbs" ' +
            'that get assembled into a user-profile.',
        },
        { src: '/img/thesis/blender.png', caption: 'rendering of the selfmade character model in open-source software blender' },
        { src: '/img/thesis/reality composer.png', caption: 'our custom model and real world object assembled in reality composer pro scene' },
        { src: '/img/thesis/xcode.png', caption: "a look at my xcode-structure where I'm adding UI-elements to the spatial layout" },
      ],
      paragraphs: [
        "For my bachelor's thesis, I developed an immersive Mixed Reality (MR) application for the Apple Vision Pro " +
          'that transforms a complex data privacy topic into a tangible, spatial experience. The application uses ' +
          'gamification and spatial computing to playfully teach children aged 10–12 how everyday devices collect ' +
          'personal data and create profiles. The project builds upon the theoretical concept of a previous ' +
          "master's thesis and advances it into a fully functional application.",
        'Technically, the app blends the digital and physical worlds using SwiftUI, Combine, RealityKit, and ARKit ' +
          'to create a Tangible User Interface. As soon as a child listens to music on a real smartphone, for ' +
          'example, the mixed reality visualizes invisible data streams as virtual spheres around the device. ' +
          'The children physically collect these spheres and bring them to a data portal anchored in the room. ' +
          'A virtual companion then explains in a child-friendly way how algorithms derive a detailed user profile ' +
          'from these clicks. The final evaluation confirmed that this highly immersive approach leads to a ' +
          'measurably deeper understanding of data collection.',
      ],
      tech: [
        { label: 'Platform', value: 'Apple Vision Pro (visionOS)' },
        { label: 'Tech Stack', value: 'SwiftUI, Combine, RealityKit, ARKit' },
        { label: 'Paradigm', value: 'Mixed Reality (MR) & Tangible User Interfaces' },
        { label: 'Focus', value: 'Data Privacy Education, Gamification, Spatial UI' },
      ],
    },
    {
      id: 'unity',
      nr: 2,
      year: 2024,
      title: 'VR Navigation & Agile Workflow',
      shortTitle: 'Unity Game Development',
      images: [
        { src: '/img/unity/poster.png', caption: 'scientific poster summarizing our work' },
        { src: '/img/unity/hamster.png', caption: 'our main character-NPC, gary the hamster' },
        { src: '/img/unity/ants.png', caption: 'ants leading the way to the next point of interest' },
        { src: '/img/unity/minimap.png', caption: 'our expandable minimap, available via button-press' },
        { src: '/img/unity/sliding_puzzle.png', caption: 'sliding puzzle minigame, needs to be completed to unlock next level' },
        { src: '/img/unity/game soundtrack.png', caption: 'game soundtrack' },
      ],
      paragraphs: [
        'This immersive VR escape room experience for the Meta Quest 3 was developed as part of an HCI research ' +
          'module to explore intuitive user navigation in virtual spaces using diegetic cues like dynamic "ant ' +
          'trails" and compasses. Serving as the Scrum Master for a three-person team, I bridged the gap between ' +
          'creative design and technical execution, managed sprint goals in Jira, and established a stable Git ' +
          'pipeline featuring weekly "Merge Mondays" to resolve conflicts early. In addition to team coordination ' +
          "and intelligent pathfinding via Unity's NavMesh, I composed the entire original soundtrack in Ableton " +
          'Live to maximize player immersion.',
        'The narrative depth and gameplay challenges are driven by two core systems I developed. First, I ' +
          'programmed the custom Finite State Machine for "Gary the Hamster," a companion NPC, orchestrating his ' +
          'entire lifecycle, dynamic spawn points, and context-aware dialogue based on player progress. Second, ' +
          'I designed a timed "Dark Mode" challenge variant: this mode satirizes modern dark mode themes while ' +
          'serving as a UX experiment to test user efficiency and performance under temporal pressure.',
      ],
      audio: { src: '/img/unity/game soundtrack.wav', label: 'game soundtrack' },
      tech: [
        { label: 'Hardware', value: 'Meta Quest 3' },
        { label: 'Core Technologies', value: 'Unity, OpenXR, C#' },
        { label: 'Management', value: 'Jira (Scrum), Git/GitHub' },
        { label: 'Creative Software', value: 'Ableton Live' },
      ],
    },
    {
      id: 'spotify',
      nr: 3,
      year: 2023,
      title: 'Spotify Data Analysis: Predicting Chart Success',
      shortTitle: 'Data Science Research Report',
      images: [
        { src: '/img/report/report1.png', caption: 'part 1: preprocessing' },
        { src: '/img/report/report2.png', caption: 'part 2: data cleanup' },
        { src: '/img/report/report3.png', caption: 'part 3: ML preprocessing' },
        { src: '/img/report/report4.png', caption: 'part 3: linear regression model setup' },
        { src: '/img/report/report5.png', caption: 'part 4: visualization of model accuracy' },
        { src: '/img/report/report6.png', caption: 'part 5: plotting model predictions and conclusion' },
      ],
      paragraphs: [
        'Developed during a semester abroad in Japan, this data science project critically examines whether a ' +
          "song's commercial success can be predicted solely by its intrinsic audio qualities. Utilizing a Kaggle " +
          'dataset of top-streamed songs enriched with metadata from the Spotify Audio Features API, we implemented ' +
          'a robust pipeline for data cleaning and Exploratory Data Analysis (EDA) in Python to prepare the dataset ' +
          'for linear regression modeling.',
        'Training three regression models revealed fundamental limitations: Purely technical API metrics like ' +
          '"danceability" had no predictive power for stream counts, as they fail to capture the cultural context ' +
          'of a hit. Furthermore, the strongest mathematical predictor—playlist placement—turned out to be a ' +
          'circular correlation. Popularity pushes songs onto playlists, and playlists drive popularity. The model ' +
          'essentially mapped the network effects and mechanisms of the platform economy, rather than uncovering ' +
          'a formula for a hit. This insight is underscored by the recent closure of the Spotify API: In the era ' +
          'of generative AI, user data is no longer a shared resource for research, but a heavily guarded asset ' +
          'of tech corporations used to fuel these exact network effects.',
      ],
      tech: [
        { label: 'Language', value: 'Python (Jupyter Notebooks)' },
        { label: 'Libraries', value: 'Pandas, Scikit-learn, Matplotlib/Seaborn' },
        { label: 'Focus', value: 'Data Cleaning, Critical Analysis, Regression Modeling' },
      ],
    },
    {
      id: 'flappy',
      nr: 4,
      year: 2022,
      title: 'Flappy Speaker: Foundations in Game Dev & Modding',
      shortTitle: 'Flappy Speaker',
      images: [
        { src: '/img/flappySpeaker/title.png', caption: 'title screen of "Flappy Speaker"' },
        { src: '/img/flappySpeaker/ground.png', caption: 'i changed the rules to allow for sliding on the ground before the parkour starts' },
        { src: '/img/flappySpeaker/game.png', caption: 'i also tweaked the gravity and distance between pipes / discs' },
        { src: '/img/flappySpeaker/game2.png', caption: 'the graphics are 2d pixel art used as game sprites in Love2D framework' },
        { src: '/img/flappySpeaker/lost.png', caption: 'the game is still not easy...' },
        { src: '/img/flappySpeaker/speakerGrid.png', caption: 'GIMP-file of character sprite' },
        { src: '/img/flappySpeaker/discGrid.png', caption: 'GIMP-file of disc sprite' },
        { src: '/img/flappySpeaker/vscode.png', caption: "I worked straight out of the available code from Harvard's GD50 class" },
      ],
      paragraphs: [
        "Completed as part of Harvard's online course GD50 (Introduction to Game Development), this project marks " +
          'my initial step into structured software engineering. The core challenge was to deconstruct an existing, ' +
          'Lua-based implementation of Flappy Bird within the LÖVE 2D framework and creatively transform it ' +
          'through modding.',
        'Transitioning from an analytical user to a hands-on developer required a deep dive into an unfamiliar ' +
          "codebase. By analyzing the game's architecture, I identified key variables and manipulated real-time " +
          'physics parameters like gravity, velocity, and collision detection boundaries. Beyond the logical code ' +
          'level, I executed a visual overhaul using GIMP: a distinctive purple pixel art theme that replaced the ' +
          'classic bird with a speaker and the pipes with burning CDs. This early experience of merging design ' +
          'with technical logic sparked my passion for system modification and reverse engineering.',
      ],
      tech: [
        { label: 'Platform', value: 'PC (LÖVE 2D Framework)' },
        { label: 'Language', value: 'Lua' },
        { label: 'Context', value: 'Harvard GD50 (Introduction to Game Development)' },
        { label: 'Tools', value: 'GIMP, LÖVE 2D' },
      ],
    },
  ],

  footer: {
    line1: 'designed & built by gianni',
    before: 'v2 — react + vite · v1 built with bootstrap in ',
    linkText: '"Webtechnologien"',
    after: ' @ TU Berlin',
    courseUrl:
      'https://moseskonto.tu-berlin.de/moses/modultransfersystem/bolognamodule/beschreibung/anzeigen.html?nummer=40000&version=10',
  },
}

const translations = { en, de, el }

// Merge requested language over EN so missing fields fall back gracefully.
export function getContent(lang = 'en') {
  if (lang === 'en' || !translations[lang]) return en
  return { ...en, ...translations[lang] }
}

export const availableLanguages = Object.keys(translations)
