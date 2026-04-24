import { Injectable, signal } from '@angular/core';

export type Lang = 'it' | 'en';

const TR: Record<Lang, Record<string, string>> = {
  it: {
    // Nav
    'nav.home': 'Home',
    'nav.design': 'Design',
    'nav.photography': 'Fotografia',
    'nav.about': 'About',
    'nav.contact': 'Contatti',

    // Home
    'home.services.subtitle': "Trasforma il tuo prodotto o servizio in un'esperienza nuova e d'impatto.",
    'home.services.discover.desc': "Entro nella tua visione per trasformarla in direzione. Analizzo pubblico, obiettivi e contesto: tra ricerca, moodboard e strategia, definisco un concept solido che orienta ogni scelta creativa.",
    'home.services.design.desc': "Le idee diventano sistema. Dall'esperienza utente alle identità visive, dai contenuti social all'immagine coordinata, progetto soluzioni coerenti, funzionali e riconoscibili, pensate per durare e distinguersi.",
    'home.services.refine.desc': "Perfeziono ogni dettaglio fino all'essenziale. Test, iterazioni e cura portano a un risultato finale pulito e coerente: un ecosistema pronto a essere lanciato, crescere e creare connessioni autentiche con il pubblico.",
    'home.highlight': 'In evidenza',

    // About
    'about.title': 'Ciao,<br/>mi chiamo Jeidi!',
    'about.bio1': "Sono una visual designer e fotografa con base a Roma. Il mio percorso è iniziato dalla fotografia di eventi, un'esperienza che mi ha insegnato a osservare, raccontare e cogliere l'essenza dei momenti. Successivamente è nata una forte passione per il mondo della moda e per tutto ciò che riguarda l'immagine e la comunicazione visiva.",
    'about.bio2': "Durante il mio percorso di studi mi sono avvicinata al branding e allo UX/UI design. Questo mi ha permesso di unire sensibilità estetica e pensiero progettuale, creando soluzioni che non sono solo belle da vedere, ma chiare, funzionali e pensate per le persone.",
    'about.bio3': "Mi riconosco in uno stile minimale, essenziale e pulito, che guida ogni mio progetto. Credo in un design capace di comunicare con semplicità, valorizzando l'identità di ogni brand in modo autentico e contemporaneo.",
    'about.philosophy': "Trasformo idee in esperienze visive coerenti e significative che raccontano storie e lasciano un segno.",

    // Photo
    'photo.title': 'Fotografia',
    'photo.events': 'EVENTI · MODA · RITRATTI',

    // Panels (design/brand/uxui/social)
    'panel.uxui': 'UX/UI Design',
    'panel.brand': 'Brand and Visual Identity',
    'panel.social': 'Social media design',

    // Credits
    'credits.label': 'Progetto realizzato in collaborazione con:',

    // Brand listing descriptions
    'brand.ada.desc': "Un rebranding di festival radicato nella natura e nelle calde notti estive.",
    'brand.ideate.desc': "Un logo design per uno studio creativo.",
    'brand.riga.desc': "Un'identità di brand costruita a partire da una singola linea.",

    // UX/UI listing descriptions
    'uxui.regiro.desc': "Un'app che trasforma la città in storie.",
    'uxui.circus.desc': "Una rivista cartacea e digitale che esplora la società moderna.",
    'uxui.ia.desc': "Un information design che affronta l'impatto dell'IA nella società.",

    // Social media listing descriptions
    'social.perlei.desc': "Un rebranding nella comunicazione social per un brand di gioielli.",
    'social.circus.desc': "Un'estensione digitale della rivista cartacea e digitale.",
    'social.riga.desc': "Una campagna pubblicitaria della città attraverso i social media.",

    // Project: ada
    'project.ada.subtitle': 'Festival rebranding',
    'project.ada.body': "Il progetto di rebranding di Villa Ada Festival nasce con l'obiettivo di rafforzarne l'identità e consolidarne la presenza presso il pubblico, attraverso un'immagine che trae ispirazione dalla natura, dalla luce calda del sole e dal cielo intenso delle notti estive, evocando la sua atmosfera autentica e vibrante.",

    // Project: regiro
    'project.regiro.subtitle': 'Roma in bici',
    'project.regiro.body': "REGIRO è un'app che trasforma ogni pedalata in una scoperta. L'obiettivo di questo progetto è quello di rendere la bicicletta il principale mezzo di trasporto dei romani. Promuove la mobilità ciclistica a Roma attraverso percorsi tematici, audioguide e contenuti esclusivi.",

    // Project: perlei
    'project.perlei.tagline': 'Gioielli artigianali',
    'project.perlei.subtitle': 'Brand di lusso',
    'project.perlei.body': "La gestione del profilo Instagram e la progettazione dei contenuti si è concentrata sulla definizione di un linguaggio visivo più contemporaneo e accessibile: palette aggiornata, composizioni più dinamiche e contenuti pensati per risultare più immediati e fruibili su Instagram. L'obiettivo è la valorizzazione del prodotto attraverso un'estetica pulita ma attuale, capace di dialogare con un pubblico più giovane senza perdere la dimensione artigianale.",

    // Project: riga
    'project.riga.tagline': 'The shape of tomorrow.',
    'project.riga.subtitle': 'City branding',
    'project.riga.body': "Il progetto di city branding per Riga nasce per raccontare la città attraverso un caleidoscopio di forme e colori che ne riflette le mille sfaccettature. Questa visione dinamica unisce storia, architettura e modernità, esprimendo la capacità di Riga di rinnovarsi continuamente. Il linguaggio visivo sviluppato celebra la diversità e il movimento della città.",

    // Project: ia
    'project.ia.subtitle': 'Information design',
    'project.ia.body': "Questo progetto nasce dalla rielaborazione digitale di un lavoro cartaceo dedicato alle grandi innovazioni del XX secolo. Il sito web approfondisce l'evoluzione dell'IA, considerata la principale forza trainante del progresso nel XXI secolo, con l'obiettivo di informare e sensibilizzare il pubblico sul suo impatto sociale e tecnologico.",

    // Project: circus
    'project.circus.tagline': "Un'analisi sulla contemporaneità attraverso l'editoria cartacea e digitale",
    'project.circus.subtitle': 'Digital magazine',
    'project.circus.body': "CIRCUS è un progetto editoriale che riflette sul modo in cui oggi osserviamo e consumiamo immagini. Accanto alla rivista, lo sviluppo di un sito web come estensione digitale del progetto, che non replica la rivista cartacea, ma la amplia, offrendo nuovi modi di fruizione e interazione. Il sito nasce come una rivista digitale, ma si evolve in una piattaforma più ampia che integra contenuti editoriali, un community hub e uno shop. L'obiettivo è creare uno spazio fluido in cui l'utente non si limita a navigare, ma esplora e approfondisce i contenuti in modo naturale.",
    'project.circus.body2': "Il progetto si concentra su semplicità, ritmo e leggibilità: interfacce pulite, gerarchie chiare e un uso controllato degli elementi visivi permettono di valorizzare le immagini senza sovraccaricare l'esperienza. Il design accompagna l'utente senza distrazioni, mantenendo coerenza con l'identità del brand e con il concept di un linguaggio più essenziale e contemporaneo.",

    // Project: ideate
    'project.ideate.subtitle': 'Creative studio',
    'project.ideate.body': "Il logo design per Ideate Creative Studio mira a esprimere un'identità creativa, accogliente e professionale. Le linee morbide del marchio riflettono un approccio amichevole e dinamico. Lo studio si distingue come un laboratorio di idee capace di offrire servizi di qualità, dalla grafica alla fotografia, fino alle campagne pubblicitarie e ai contenuti multimediali.",

    // Project: circus-sm
    'project.circus-sm.tagline': "Un'analisi sulla contemporaneità attraverso l'editoria cartacea e digitale",
    'project.circus-sm.subtitle': 'Digital magazine',
    'project.circus-sm.body': "CIRCUS è un progetto editoriale e digitale che riflette sul modo in cui oggi osserviamo e consumiamo immagini. Accanto alla rivista, lo sviluppo di un sito web come estensione digitale del progetto, che non replica la rivista cartacea, ma la amplia, offrendo nuovi modi di fruizione e interazione. Instagram di CIRCUS è pensato come estensione dinamica del progetto digitale. Non è solo uno strumento promozionale, ma uno spazio editoriale che traduce il linguaggio del magazine in un flusso visivo continuo. Attraverso post, caroselli e storie, i contenuti vengono sintetizzati, approfonditi e resi più accessibili, mantenendo coerenza con l'identità visiva del brand. Instagram diventa così un punto di contatto diretto con un pubblico più ampio e giovane, stimolando curiosità e invitando l'utente a esplorare il sito per un'esperienza più completa.",

    // Project: riga-sm
    'project.riga-sm.subtitle': 'Digital city branding',
    'project.riga-sm.body': "Il progetto di city branding per Riga traduce il concept del caleidoscopio in un sistema dinamico e riconoscibile, dove forme e colori si trasformano per riflettere l'energia di Riga. Attraverso format flessibili e contenuti visivi in movimento, i canali raccontano le diverse anime della città, tra storia e contemporaneità, creando una narrazione coerente ma sempre in evoluzione. Il risultato è una presenza social viva e coinvolgente, capace di esprimere il continuo rinnovamento di Riga.",
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.design': 'Design',
    'nav.photography': 'Photography',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Home
    'home.services.subtitle': 'Transform your product or service into a new and impactful experience.',
    'home.services.discover.desc': "I dive into your vision to transform it into direction. I analyze audience, goals, and context — through research, moodboards, and strategy, I define a solid concept that guides every creative choice.",
    'home.services.design.desc': "Ideas become systems. From user experience to visual identities, social content to brand guidelines, I design coherent, functional, and distinctive solutions built to last and stand out.",
    'home.services.refine.desc': "I perfect every detail down to the essentials. Testing, iteration, and care lead to a clean, coherent final result — an ecosystem ready to launch, grow, and build authentic connections with the audience.",
    'home.highlight': 'Highlight',

    // About
    'about.title': "Hi,<br/>I'm Jeidi!",
    'about.bio1': "I'm a visual designer and photographer based in Rome. My journey started with event photography — an experience that taught me to observe, tell stories, and capture the essence of moments. Over time, a deep passion for the world of fashion and visual communication grew within me.",
    'about.bio2': "During my studies, I discovered branding and UX/UI design. This allowed me to merge aesthetic sensibility with a project-oriented mindset, creating solutions that are not only beautiful, but clear, functional, and people-centered.",
    'about.bio3': "I identify with a minimal, essential, and clean style that guides every project. I believe in design that communicates with simplicity — honoring each brand's identity in an authentic and contemporary way.",
    'about.philosophy': "I turn ideas into coherent, meaningful visual experiences that tell stories and leave a mark.",

    // Photo
    'photo.title': 'Photography',
    'photo.events': 'EVENTS · FASHION · PORTRAITS',

    // Panels
    'panel.uxui': 'UX/UI Design',
    'panel.brand': 'Brand and Visual Identity',
    'panel.social': 'Social media design',

    // Credits
    'credits.label': 'Project made in collaboration with:',

    // Brand listing descriptions
    'brand.ada.desc': "A festival rebranding rooted in nature and warm summer nights.",
    'brand.ideate.desc': "A logo design for a creative studio.",
    'brand.riga.desc': "A brand identity built from a single line.",

    // UX/UI listing descriptions
    'uxui.regiro.desc': "A walking-tour app that turns the city into stories.",
    'uxui.circus.desc': "A print and digital magazine that explores modern society.",
    'uxui.ia.desc': "An information design that tackles the impact of AI in society.",

    // Social media listing descriptions
    'social.perlei.desc': "A rebranding in social communication for a jewelry brand.",
    'social.circus.desc': "A digital extent of the print and digital magazine.",
    'social.riga.desc': "An advertising campaign of the city through social media.",

    // Project: ada
    'project.ada.subtitle': 'Festival rebranding',
    'project.ada.body': "The Villa Ada Festival rebranding project was born with the goal of strengthening its identity and consolidating its presence with audiences, through imagery inspired by nature, the warm light of the sun, and the deep sky of summer nights — evoking its authentic and vibrant atmosphere.",

    // Project: regiro
    'project.regiro.subtitle': 'Cycling through Rome',
    'project.regiro.body': "REGIRO is an app that transforms every ride into a discovery. The goal of this project is to make the bicycle the primary mode of transport for Romans. It promotes cycling mobility in Rome through themed routes, audio guides, and exclusive content.",

    // Project: perlei
    'project.perlei.tagline': 'Artisan jewelry',
    'project.perlei.subtitle': 'Luxury brand',
    'project.perlei.body': "The Instagram profile management and content design focused on defining a more contemporary and accessible visual language: updated color palette, more dynamic compositions, and content designed to feel more immediate and engaging on Instagram. The goal is to showcase the product through a clean yet current aesthetic, capable of connecting with a younger audience without losing the artisanal dimension.",

    // Project: riga
    'project.riga.tagline': 'The shape of tomorrow.',
    'project.riga.subtitle': 'City branding',
    'project.riga.body': "The city branding project for Riga was created to tell the city's story through a kaleidoscope of shapes and colors that reflects its many facets. This dynamic vision unites history, architecture, and modernity, expressing Riga's ability to constantly reinvent itself. The visual language developed celebrates the city's diversity and movement.",

    // Project: ia
    'project.ia.subtitle': 'Information design',
    'project.ia.body': "This project was born from the digital reinterpretation of a printed work dedicated to the great innovations of the 20th century. The website explores the evolution of AI — considered the main driving force of progress in the 21st century — with the goal of informing and raising awareness about its social and technological impact.",

    // Project: circus
    'project.circus.tagline': "An analysis of contemporary society through print and digital publishing",
    'project.circus.subtitle': 'Digital magazine',
    'project.circus.body': "CIRCUS is an editorial project that reflects on the way we observe and consume images today. Alongside the magazine, a website was developed as a digital extension of the project — not replicating the print edition, but expanding it, offering new ways of experiencing and interacting with the content. The site was conceived as a digital magazine but evolves into a broader platform integrating editorial content, a community hub, and a shop. The goal is to create a fluid space where the user doesn't just browse, but explores and deepens content in a natural way.",
    'project.circus.body2': "The project focuses on simplicity, rhythm, and readability: clean interfaces, clear hierarchies, and controlled use of visual elements allow images to shine without overwhelming the experience. The design guides the user without distractions, maintaining coherence with the brand identity and the concept of a more essential and contemporary visual language.",

    // Project: ideate
    'project.ideate.tagline': 'Creative studio',
    'project.ideate.subtitle': 'Creative studio',
    'project.ideate.body': "The logo design for Ideate Creative Studio aims to express a creative, welcoming, and professional identity. The soft lines of the brand reflect a friendly and dynamic approach. The studio stands out as an ideas laboratory capable of delivering quality services, from graphic design to photography, advertising campaigns, and multimedia content.",

    // Project: circus-sm
    'project.circus-sm.tagline': "An analysis of contemporary society through print and digital publishing",
    'project.circus-sm.subtitle': 'Digital magazine',
    'project.circus-sm.body': "CIRCUS is an editorial and digital project that reflects on the way we observe and consume images today. Alongside the magazine, a website was developed as a digital extension of the project — not replicating the print edition, but expanding it, offering new ways of experiencing and interacting. CIRCUS's Instagram is designed as a dynamic extension of the digital project. It is not just a promotional tool, but an editorial space that translates the magazine's language into a continuous visual flow. Through posts, carousels, and stories, content is synthesized, deepened, and made more accessible, while maintaining coherence with the brand's visual identity. Instagram becomes a direct point of contact with a broader, younger audience, sparking curiosity and inviting users to explore the website for a fuller experience.",

    // Project: riga-sm
    'project.riga-sm.subtitle': 'Digital city branding',
    'project.riga-sm.body': "The city branding project for Riga translates the kaleidoscope concept into a dynamic and recognizable system, where shapes and colors transform to reflect the energy of Riga. Through flexible formats and moving visual content, the channels tell the different sides of the city — between history and the contemporary — creating a coherent yet ever-evolving narrative. The result is a vibrant and engaging social presence, capable of expressing Riga's constant renewal.",
  },
};

@Injectable({ providedIn: 'root' })
export class LangService {
  lang = signal<Lang>('it');

  setLang(l: Lang): void { this.lang.set(l); }

  t(key: string): string {
    return TR[this.lang()][key] ?? '';
  }
}
