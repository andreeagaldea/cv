export const projectsData = {
  published: {
    web: [
      {
        id: "drumul-taberelor",
        name: "Drumul Taberelor",
        description: {
          ro: "Continuarea proiectului \"Centrul Comercial Auchan/Aushopping\", cu un template nou pentru tot centrul, atât pentru landing page cât și pentru restul paginilor locației.",
          en: "A continuation of the \"Centrul Comercial Auchan/Aushopping\" project, featuring a new template for the entire center, including both the landing page and the remaining location pages."
        },
        links: ["https://drumultaberelor.ro", "https://www.iqads.ro/articol/52845/drumul-taberelor-centru-comercial-gandit-si-adaptat-nevoilor-cartierului-drumul"],
        role: "Frontend Developer",
        framework: "Laravel & VueJs",
        extra: ["Bootstrap", "OwlCarousel", "AnimeJs", "ScrollMagic", "SVG maps"]
      },
      {
        id: "centrul-comercial-auchan",
        name: "Centrul Comercial Auchan / Aushopping",
        description: {
          ro: "Proiect cu CMS pentru gestiunea microsite-urilor pentru fiecare locație din Centrele Comerciale Auchan/Aushopping, cu posibilitatea creării de noi articole, magazine și centre pe unul sau mai multe domenii.",
          en: "A CMS project for managing microsites for each Auchan/Aushopping commercial center location, with functionality to create new articles, stores, and centers across single or multiple domains."
        },
        // links: [
        //   "https://cca.ro",
        //   "https://centrulcomercialauchan.ro/",
        //   "https://aushopping.ro"
        // ],
        role: "Frontend Developer",
        framework: "Laravel & VueJs",
        extra: ["Bootstrap", "OwlCarousel", "AnimeJs"]
      },
      {
        id: "academia-spatiala",
        name: "Academia Spațială Dr. Leahu",
        img: "https://media.iqads.ro/2019/10/cover-asdl-cover-850.jpg?v=202006180249",
        fullWidth: true,
        role: "Frontend Developer",
        description: {
          ro: "Academia Spațială Dr. Leahu este un proiect ce transformă mersul la medicul stomatolog într-o vizită plăcută pentru cei mici, prin introducerea unor jocuri ce cultivă interesul copiilor pentru îngrijirea dentară.",
          en: "Academia Spațială Dr. Leahu is a project that transforms dentist visits into an enjoyable experience for kids by introducing games that foster their interest in dental care."
        },
        links: [
          "https://academiaspatiala.ro/",
          "https://youtu.be/7w2n_NNFiUE",
          "https://www.iqads.ro/articol/48258/mind-treat-studios-lanseaza-un-nou-proiect-digital-inovator-academia-spatiala-dr"
        ],
        components: [
          {
            name: "Landing page & Profile page",
            role: "Lead Frontend Developer",
            framework: "VueJs",
            extra: ["Bootstrap", "axios", "ParallaxJs", "AnimeJs", "Slick Carousel", "QR Camera"]
          },
          {
            name: "Doctor desk & Frontdesk",
            role: "Frontend Developer",
            framework: "Angular & Typescript",
            extra: ["Kanban tabs"]
          },
          {
            name: "Admin",
            role: "Frontend Developer",
            framework: "VueJs & Typescript"
          }
        ]
      },
      {
        id: "spiridusi-de-nadejde",
        name: "Spiriduși de nădejde",
        description: {
          ro: "Platformă de colectare date, prin care oamenii se angajează să trimită pachete copiilor cu situații mai puțin fericite.",
          en: "A data collection platform through which people commit to sending care packages to underprivileged children."
        },
        links: [
        //   "https://spiridusidenadejde.ro",
          "https://www.itsybitsy.ro/fii-spiridusul-de-nadejde-al-lui-mos-craciun/"
        ],
        extra: ["BootstrapStudio"]
      },
    //   {
    //     id: "recodaily",
    //     name: "Recodaily",
    //     description: {
    //       ro: "Platformă web ce incorporează un concept nou în lumea fotografilor, și anume recomandările publice.",
    //       en: "A web platform introducing a new concept to the photography world, specifically public recommendations."
    //     },
    //     links: ["https://recodaily.com"],
    //     role: "Lead Frontend Developer",
    //     framework: "Laravel & VueJs",
    //     extra: ["Bootstrap", "OwlCarousel"]
    //   },
      {
        id: "aniversare-18-ani",
        name: "Aniversare 18 ani Carrefour",
        links: [
        //   "https://aniversare.carrefour.ro/",
          "https://www.iqads.ro/articol/46944/campania-digitala-aniversara-dezvoltata-de-carrefour-romania-si-mind-treat#",
          "https://www.iqads.ro/articol/47023/carrefour-romania-si-mind-treat-studios-stabilesc-recordul-pentru-cea-mai-mare"
        ],
        components: [
          {
            name: "Landing page",
            role: "Frontend Developer",
            framework: "Laravel",
            extra: ["Bootstrap", "Slick Carousel", "Scroll Section"]
          },
          {
            name: "Game",
            role: "Support Frontend Developer"
          }
        ]
      },
      {
        id: "coresi-business-campus",
        name: "Coresi Business Campus",
        // links: ["https://coresibusinesscampus.ro/ro"],
        role: "Lead Frontend Developer",
        framework: "Laravel & VueJs",
        extra: ["Bootstrap", "OwlCarousel", "AnimeJs", "SliderRevolution", "ThreeJs", "ScrollMagic"]
      },
      {
        id: "biblioteca-centenara",
        name: "Biblioteca Centenară",
        description: {
          ro: "Oamenii aduceau cărți la urnele special amenajate din galeriile comerciale (Coresi Brașov, Auchan, Aushopping). Un proiect de colectare date, cu un succes de peste 7000 de cărți donate.",
          en: "People donated books at specially arranged collection boxes in shopping centers (Coresi Brașov, Auchan, Aushopping). A data collection project with a success of over 7,000 donated books."
        },
        links: [
        //   "https://biblioteca.bucurieimpreuna.ro/",
          "https://www.iqads.ro/articol/45289/cartile-donate-prin-campania-biblioteca-centenara-ar-forma-o-coloana-a?hl=en-US"
        ],
        role: "Frontend Developer",
        framework: "Laravel & VueJs",
        extra: ["Bootstrap"]
      },
      {
        id: "ia-digitala",
        name: "Ia Digitală - Coresi Brașov",
        description: {
          ro: "O campanie frumoasă pentru Coresi Brașov. Dezvoltarea a constat în implementarea unui landing page, website de campanie, joc Phaser ('Creează-ți IA') și colectare date.",
          en: "A creative campaign for Coresi Brașov including a landing page, campaign site, Phaser game, and data collection."
        },
        links: [
        //   "https://bucurie.coresibrasov.ro/",
          "https://v2.newsbv.ro/port-bucurie-coresi-lantul-mandriei-romanesti/"
        ],
        role: "Frontend Developer",
        framework: "Laravel & VueJs",
        extra: ["Bootstrap", "Phaser"]
      },
      {
        id: "joc-drumul-taberelor",
        name: "Joc Drumul Taberelor",
        description: {
          ro: "Un joc inspirat din 2048 Solitaire cu un twist adaptat pentru noua poziționare a centrului din Drumul Taberei.",
          en: "A game inspired by 2048 Solitaire with a custom twist matching the new positioning of the Drumul Taberei center."
        },
        links: ["https://joc.drumultaberelor.ro/"],
        role: "Frontend Developer",
        framework: "ReactJs"
      }
    ],
    android: [
      {
        id: "simplomat",
        name: "Simplomat",
        description: {
          ro: "Mentenanță și dezvoltare de noi funcționalități pentru proiectul Simplomat.",
          en: "Maintenance and development of new features for the Simplomat project."
        },
        links: ["https://youtu.be/1rWfcOE8My0"],
        role: "Android Developer"
      },
      {
        id: "taxi-app",
        name: "Taxi App / Acces Taxi",
        description: {
          ro: "Aplicație de taxi cu plată cash și card în aplicație prin Netopia. Lead Developer pe aplicația de Android (șofer și pasager).",
          en: "Taxi application featuring both cash and in-app credit card payment via Netopia. Served as Lead Developer on Android."
        },
        role: "Lead Android Developer",
        extra: ["Google Maps", "Netopia"]
      }
    ]
  },

  personal: [
    /* 
    {
      id: "portfolio-v2",
      name: "Interactive Portfolio Website",
      description: {
        ro: "Portofoliu personal realizat în React și Tailwind CSS.",
        en: "Personal portfolio built with React and Tailwind CSS."
      },
      links: ["https://github.com/user/cv"],
      role: "Creator",
      framework: "React & Vite & TailwindCSS"
    }
    */
  ]
};