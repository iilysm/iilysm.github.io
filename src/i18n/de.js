// German content, ported verbatim from the v1 de/ pages.

const de = {
  nav: {
    about: 'über mich',
    projects: 'projekte',
  },

  hero: {
    kicker: '// willkommen auf meinem portfolio',
    greeting: 'hi, ich bin gianni.',
    tagline: 'softwareentwickler für web, mobile & interaktive medien.',
    cta: 'projekte ansehen',
    intro:
      'Hi, ich bin Softwareentwickler und Informatik-Masterstudent. Ich entwickle Full-Stack-Webanwendungen, ' +
      'iOS- und Mixed-Reality-Apps sowie interaktive Erlebnisse. Dabei lege ich Wert darauf, sie sicher und ' +
      'datenschutzfreundlich zu gestalten. Ich suche eine Werkstudentenstelle in der Softwareentwicklung, ' +
      'IT oder im Security Engineering.',
  },

  about: {
    heading: 'über mich',
    paragraphs: [
      'Code, Netzwerke, Daten: Mein Portfolio zeigt meine gesamte technische Bandbreite. Ich baue ' +
        'VM-basierte Netzwerkarchitekturen, entwickle Full-Stack-Webanwendungen und tauche tief in ' +
        'Data Science und Machine Learning ein.',
      'Ob beim Entwickeln einer Mixed Reality-Anwendung für meine Bachelorarbeit oder beim ' +
        'Konstruieren kniffliger Capture-The-Flag (CTF) Challenges, ich liebe es, mich in neue ' +
        'Technologien hineinzufuchsen und Schwachstellen aufzudecken.',
      'Mein Ziel? Digitale Produkte zu bauen, die von Grund auf durchdacht, sicher und wirklich nützlich ' +
        'sind. Scrolle einfach nach unten, um die einzelnen Projekte zu erkunden und zu sehen, wie ich ' +
        'das in die Praxis umsetze.',
    ],
    skillsHeading: 'IT-Kenntnisse',
    skills: [
      { label: 'Programmiersprachen', value: 'Python, C, JavaScript, Swift' },
      { label: 'Frameworks & Bibliotheken', value: 'Django REST Framework, SwiftUI, Combine, NumPy, PyTorch' },
      { label: 'Datenbanken', value: 'MySQL, MongoDB' },
      { label: 'Tools & Infrastruktur', value: 'Git, Linux, Bash, Docker, Vagrant, Unity, Reality Composer Pro, Blender' },
      { label: 'Security', value: 'Hack The Box (CTF), Applied Security Lab (Top 10/150)' },
      { label: 'Interessen', value: 'Elektronische Musikproduktion, Klangsynthese (Ableton Live, Max/MSP), CTFs' },
    ],
  },

  projectsHeading: 'projekte',

  projects: [
    {
      id: 'ctf',
      nr: 0,
      year: 2026,
      title: 'Cybersecurity CTF-Plattform',
      images: [
        { src: '/img/ctf/flag.png', caption: 'Flag für die zweite Application-Challenge' },
        { src: '/img/ctf/code.png', caption: 'Backend-Implementierung in Django' },
        { src: '/img/ctf/cctv.png', caption: 'CCTV Challenge' },
        { src: '/img/ctf/nmap.png', caption: 'Netzwerk-Scanning mit Nmap' },
        { src: '/img/ctf/win.png', caption: 'Capture the Flag abgeschlossen' },
      ],
      paragraphs: [
        'Diese interaktive, mehrstufige Capture-The-Flag (CTF) Challenge verbindet Application Security ' +
          'und Network Security zu einem realistischen Angriffsszenario. Das gesamte Projekt ist als ' +
          'kompaktes "Infrastructure as Code"-Paket konzipiert: Studierende können die Challenge ' +
          'einfach als ZIP-Datei herunterladen und via Vagrant mit einem einzigen Befehl lokal in einer ' +
          'isolierten Umgebung starten: echtes Plug & Play ohne komplexe Konfigurationen.',
        'Der Einstieg erfolgt über eine von mir entwickelte Django-Webanwendung, auf der klassische ' +
          'Web-Schwachstellen aufgespürt und ausgenutzt werden müssen. Dieser erfolgreiche Web-Exploit ' +
          'dient den Spielern als Sprungbrett in die Kommandozeile (CLI). Von dort aus analysieren und ' +
          'penetrieren sie mittels Nmap ein isoliertes Netzwerk aus drei virtuellen Maschinen. Durch diese ' +
          'Multi-VM-Topologie bleibt die gesamte Infrastruktur plattformübergreifend reproduzierbar und portabel.',
      ],
      tech: [
        { label: 'Plattform', value: 'Web, Virtuelle Maschinen (Multi-VM-Topologie)' },
        { label: 'Sprachen', value: 'Python, Bash, HTML/CSS' },
        { label: 'Framework', value: 'Django' },
        { label: 'Werkzeuge', value: 'Vagrant, Nmap, Git' },
      ],
    },
    {
      id: 'thesis',
      nr: 1,
      year: 2025,
      title: 'Mixed-Reality-Anwendung: Datenerfassung für Kinder greifbar machen',
      images: [
        {
          src: '/img/thesis/addison.png',
          caption:
            'ein Blick durch das Headset auf meine Bachelorarbeit: ein Gamification-Ansatz, um Kindern ' +
            'Datenerfassung auf Alltagsgeräten beizubringen: Musikhören erzeugt "Informationskugeln", ' +
            'die zu einem Nutzerprofil zusammengefügt werden.',
        },
        { src: '/img/thesis/blender.png', caption: 'Rendering des selbstgemachten Charaktermodells in der Open-Source-Software Blender' },
        { src: '/img/thesis/reality composer.png', caption: 'unsere virtuellen und realen Objekte verbunden in einer Reality Composer Pro Szene' },
        { src: '/img/thesis/xcode.png', caption: 'ein Blick auf meine Xcode-Struktur, wo ich UI-Elemente zum räumlichen Layout hinzufüge' },
      ],
      paragraphs: [
        'Für meine Bachelorarbeit habe ich eine immersive Mixed-Reality-Anwendung (MR) für die Apple Vision ' +
          'Pro entwickelt, die ein komplexes Datenschutz-Thema in ein greifbares, räumliches Erlebnis ' +
          'verwandelt. Die Anwendung nutzt Gamification und Spatial Computing, um Kindern im Alter von ' +
          '10–12 Jahren spielerisch zu vermitteln, wie alltägliche Geräte persönliche Daten erfassen und ' +
          'Profile erstellen. Das Projekt basiert auf dem theoretischen Konzept einer früheren Masterarbeit ' +
          'und entwickelt dieses zu einer voll funktionsfähigen Anwendung weiter.',
        'Technisch verschmilzt die App die digitale und physische Welt mithilfe von SwiftUI, Combine, ' +
          'RealityKit und ARKit zu einem sogenannten Tangible User Interface. Sobald ein Kind auf einem ' +
          'echten Smartphone beispielsweise Musik hört, visualisiert die Mixed Reality unsichtbare ' +
          'Datenströme als virtuelle Kugeln um das Gerät. Die Kinder sammeln diese Kugeln physisch ein und ' +
          'bringen sie zu einem im Raum verankerten Datenportal. Ein virtueller Begleiter erklärt ' +
          'anschließend kindgerecht, wie Algorithmen aus diesen Klicks ein detailliertes Nutzerprofil ' +
          'ableiten. Die abschließende Evaluation bestätigte, dass dieser hochimmersive Ansatz zu einem ' +
          'nachweislich tieferen Verständnis für Datenerfassung führt.',
      ],
      tech: [
        { label: 'Plattform', value: 'Apple Vision Pro (visionOS)' },
        { label: 'Tech Stack', value: 'SwiftUI, Combine, RealityKit, ARKit' },
        { label: 'Paradigma', value: 'Mixed Reality (MR) & Tangible User Interfaces' },
        { label: 'Fokus', value: 'Data Privacy Education, Gamification, Spatial UI' },
      ],
    },
    {
      id: 'unity',
      nr: 2,
      year: 2024,
      title: 'VR-Navigation & Agiler Workflow',
      images: [
        { src: '/img/unity/poster.png', caption: 'wissenschaftliches Poster, das unsere Arbeit zusammenfasst' },
        { src: '/img/unity/hamster.png', caption: 'unser Hauptcharakter-NPC, Gary der Hamster' },
        { src: '/img/unity/ants.png', caption: 'Ameisen, die den Weg zum nächsten interessanten Punkt weisen' },
        { src: '/img/unity/minimap.png', caption: 'unsere erweiterbare Minimap, verfügbar per Knopfdruck' },
        { src: '/img/unity/sliding_puzzle.png', caption: 'Schiebepuzzle-Minispiel, muss abgeschlossen werden, um das nächste Level freizuschalten' },
        { src: '/img/unity/game soundtrack.png', caption: 'Spiel-Soundtrack' },
      ],
      paragraphs: [
        'Dieses immersive VR-Escape-Room-Erlebnis für die Meta Quest 3 untersucht im Rahmen eines ' +
          'HCI-Forschungsmoduls die intuitive Benutzernavigation in virtuellen Räumen durch diegetische ' +
          'Hinweise wie dynamische "Ameisenpfade" und Kompasse. Als Scrum Master eines dreiköpfigen Teams ' +
          'übernahm ich die Koordination zwischen Design und technischer Umsetzung, steuerte die ' +
          'Sprintziele in Jira und etablierte eine stabile Git-Pipeline mit wöchentlichen "Merge Mondays" ' +
          'zur frühen Behebung von Merge-Konflikten. Neben der Teamkoordination und der Wegfindung via ' +
          'Unity NavMesh komponierte ich den Soundtrack in Ableton Live.',
        'Die narrative Tiefe und die spielerischen Herausforderungen basieren auf zwei von mir ' +
          'entwickelten Kernfeatures. Zum einen programmierte ich die NPC-Logik für "Gary den Hamster", ' +
          'einen virtuellen Begleiter, dessen Lebenszyklus, dynamische Spawnpunkte und kontextsensitive ' +
          'Dialoge über eine maßgeschneiderte Zustandsmaschine (Finite State Machine) gesteuert werden. ' +
          'Zum anderen entwarf ich eine zeitbegrenzte "Dark Mode"-Herausforderungsvariante: Dieser Modus ' +
          'satirisiert moderne Dark-Mode-Themes und diente als UX-Experiment, um die Benutzereffizienz ' +
          'unter Zeitdruck zu testen.',
      ],
      audio: { src: '/img/unity/game soundtrack.wav', label: 'Spiel-Soundtrack' },
      tech: [
        { label: 'Hardware', value: 'Meta Quest 3' },
        { label: 'Kerntechnologien', value: 'Unity, OpenXR, C#' },
        { label: 'Management', value: 'Jira (Scrum), Git/GitHub' },
        { label: 'Kreativsoftware', value: 'Ableton Live' },
      ],
    },
    {
      id: 'spotify',
      nr: 3,
      year: 2023,
      title: 'Spotify-Datenanalyse: Vorhersage von Chart-Erfolgen',
      images: [
        { src: '/img/report/report1.png', caption: 'Teil 1: Vorverarbeitung' },
        { src: '/img/report/report2.png', caption: 'Teil 2: Datenbereinigung' },
        { src: '/img/report/report3.png', caption: 'Teil 3: ML-Vorverarbeitung' },
        { src: '/img/report/report4.png', caption: 'Teil 3: Einrichtung des linearen Regressionsmodells' },
        { src: '/img/report/report5.png', caption: 'Teil 4: Visualisierung der Modellgenauigkeit' },
        { src: '/img/report/report6.png', caption: 'Teil 5: Darstellung der Modellvorhersagen und Schlussfolgerung' },
      ],
      paragraphs: [
        'Entwickelt während eines Auslandssemesters in Japan, untersucht dieses Data-Science-Projekt ' +
          'kritisch, ob der kommerzielle Erfolg eines Songs allein auf seinen intrinsischen Audioqualitäten ' +
          'vorhergesagt werden kann. Auf Basis eines Kaggle-Datensatzes der meistgestreamten Songs und der ' +
          'Spotify Audio Features API implementierten wir eine robuste Pipeline zur Datenbereinigung und ' +
          'explorativen Analyse (EDA) in Python, um die Daten für eine lineare Regressionsmodellierung ' +
          'vorzubereiten.',
        'Das Training dreier Regressionsmodelle legte fundamentale Grenzen offen: Rein technische ' +
          'API-Metriken wie "Tanzbarkeit" besaßen keinerlei Vorhersagekraft für Stream-Zahlen, da sie den ' +
          'kulturellen Kontext eines Hits nicht erfassen können. Zudem entpuppte sich der stärkste ' +
          'mathematische Prädiktor, die Platzierung in Playlists, als zirkuläre Korrelation. Popularität ' +
          'bringt Songs auf Playlists, und Playlists erzwingen Popularität. Das Modell bildete somit ' +
          'weniger eine Formel für einen Hit ab, sondern vielmehr die Netzwerkeffekte und Mechanismen der ' +
          'Plattformökonomie. Diese Erkenntnis wird durch die Schließung der Spotify-API unterstrichen: ' +
          'Nutzerdaten sind im Zeitalter generativer KI kein offenes Forschungsgut mehr, sondern ein streng ' +
          'bewachtes Asset der Tech-Konzerne, das genau diese Netzwerkeffekte befeuert.',
      ],
      tech: [
        { label: 'Sprache', value: 'Python (Jupyter Notebooks)' },
        { label: 'Bibliotheken', value: 'Pandas, Scikit-learn, Matplotlib/Seaborn' },
        { label: 'Fokus', value: 'Datenbereinigung, Kritische Analyse, Regressionsmodellierung' },
      ],
    },
    {
      id: 'flappy',
      nr: 4,
      year: 2022,
      title: 'Flappy Speaker: Grundlagen in Spieleentwicklung & Modding',
      images: [
        { src: '/img/flappySpeaker/title.png', caption: 'Titelbildschirm von "Flappy Speaker"' },
        { src: '/img/flappySpeaker/ground.png', caption: 'ich habe die Regeln geändert, um das Rutschen auf dem Boden zu ermöglichen, bevor der Parkour beginnt' },
        { src: '/img/flappySpeaker/game.png', caption: 'ich habe auch die Schwerkraft und den Abstand zwischen Rohren / Scheiben angepasst' },
        { src: '/img/flappySpeaker/game2.png', caption: 'die Grafiken sind 2D-Pixelart, die als Spiel-Sprites im Love2D-Framework verwendet werden' },
        { src: '/img/flappySpeaker/lost.png', caption: 'das Spiel ist immer noch nicht einfach...' },
        { src: '/img/flappySpeaker/speakerGrid.png', caption: 'GIMP-Datei des Charakter-Sprites' },
        { src: '/img/flappySpeaker/discGrid.png', caption: 'GIMP-Datei des Disc-Sprites' },
        { src: '/img/flappySpeaker/vscode.png', caption: 'Ich habe direkt mit dem verfügbaren Code aus dem GD50-Kurs von Harvard gearbeitet' },
      ],
      paragraphs: [
        'Dieses Projekt entstand im Rahmen von Harvards Online-Kurs GD50 (Introduction to Game ' +
          'Development) und markiert meinen Einstieg in die strukturierte Softwareentwicklung. Die ' +
          'Kernaufgabe bestand darin, eine bestehende, Lua-basierte Implementierung von Flappy Bird im ' +
          'LÖVE 2D Framework zu dekonstruieren und durch eigenes Modding kreativ zu transformieren.',
        'Der Übergang vom analytischen Nutzer zum aktiven Entwickler erforderte den Einblick in eine ' +
          'fremde Codebasis. Durch die Analyse der Spielarchitektur identifizierte ich mathematische ' +
          'Kernvariablen und manipulierte so Physikparameter wie Schwerkraft, Spielergeschwindigkeit und ' +
          'die Regeln zur Kollisionserkennung. Neben der logischen Code-Ebene verpasste ich dem Spiel ' +
          'einen kompletten Reskin in GIMP: Ein "lila" Pixelart-Thema, bei dem der klassische Vogel durch ' +
          'einen Lautsprecher und die Rohre durch brennende CDs ersetzt wurden. Diese frühe Erfahrung, ' +
          'Design mit technischer Logik zu verbinden, weckte meine Begeisterung für System-Modifikation ' +
          'und Reverse Engineering.',
      ],
      tech: [
        { label: 'Plattform', value: 'PC (LÖVE 2D Framework)' },
        { label: 'Sprache', value: 'Lua' },
        { label: 'Kontext', value: 'Harvard GD50 (Introduction to Game Development)' },
        { label: 'Tools', value: 'GIMP, LÖVE 2D' },
      ],
    },
  ],

  footer: {
    line1: 'designed & built by gianni',
    before: 'v2 (react + vite) · v1 mit bootstrap gebaut im Kurs ',
    linkText: '"Webtechnologien"',
    after: ' @ TU Berlin',
    courseUrl:
      'https://moseskonto.tu-berlin.de/moses/modultransfersystem/bolognamodule/beschreibung/anzeigen.html?nummer=40000&version=10',
  },
}

export default de
