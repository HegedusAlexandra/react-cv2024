/* 
main.title should be less than 70 more than 20 char
main.desc should be less than 170 char */

const resources = {
  en: {
    translation: {
      menu: {
        home: "home",
        "about me": "about me",
        projects: "projects",
        contact: "contact",
        wdp: "web developer portfolio",
        skills: "Skills",
        knowledge: "experience, languages, education",
        introduction: "introduction"
      },
      landing: {
        hello: "Hello, I’m Alexandra",
        developer: "junior programmer & analyst",
        ecoinfo: "with a business informatics background",
        long: "I specialize in building clear, responsive web interfaces with a focus on usability and structure. Explore my projects and feel free to get in touch."
      },
      introduction: {
        description:"Frontend developer passionate about building modern, user-focused web applications. Always eager to learn new technologies and improve my skills.",
        more: "read more",
        1: "My name is Alexandra, and as an enthusiastic beginner frontend developer, I have more than a year of experience in the world of web technologies. I am currently actively expanding my knowledge in both practical and theoretical areas while studying business informatics at university. Over the past year, I have participated in numerous projects. I am proud to be able to create dynamic and responsive websites that are not only aesthetically appealing but also cater to user needs.",
        2: "I continuously strive to stay up-to-date with the latest frontend technologies and trends, regularly participating in online courses and workshops. I believe that continuous learning and development are crucial in the technology sector, and I am motivated to further expand my professional knowledge. My goal is to be part of a team where I can share my experiences and work together on exciting projects while gaining further experience. I believe that the combination of creativity, teamwork, and technological innovation can achieve truly impressive results. I am excited to see what challenges and opportunities I will encounter in the future in the field of frontend development."
      },
      helmet: {
        main: "Alexandra Hegedüs | Front-End Developer & Data Analyst",
        projects: "Projects",
        pro_desc:
          "Explore my portfolio, showcases my initial projects, each crafted to provide a glimpse into my journey and growth in web development. ",
        h1: "I warmly invite you to explore my projects."
      },
      knowledge: {
        description:"Beyond technical expertise, I value continuous learning, problem-solving, and effective collaboration. The skills listed here represent the areas I rely on in my daily work and continuously improve as I grow as a developer.",
        technical_skills: "Technical Skills",
        soft_skills: "Soft Skills",
        lang_skills: "Language Skills",
        soft_skills_des:
          "In today's rapidly evolving professional landscape, the spotlight increasingly falls on a set of skills that computers can't automate and exams can't quantify : soft skills. Mastering key skills like quick learning, creative problem-solving, adaptability, empathy, clear communication, and teamwork not only sets you apart but also brings people together, making every challenge a bit more manageable and every success a shared joy. ",
        eng: "English",
        eng_level: "C2",
        gimn: "Bilingual High School",
        ten_years: "Lived abroad for 10 years and worked as a manager",
        hun: "Hungarian",
        hun_level: "Native",
        ita: "Italian",
        ita_level: "Beginner",
        ger: "German",
        EI: "Business Informatics",
        frontend: "Frontend Development - Mobile app and Website"
      },
      projects: {
        description:"These private projects reflect my development journey and the technologies I enjoy working with most. Each application was built to solve a real-world problem while providing an opportunity to learn and apply new tools, frameworks, and best practices.",
        "check":"check it out",
        "PAT-headline": "My Patissier Portfolio",
        "PAT-description":
          "This is my own Patissier Portfolio site made with React and a lot of white chocolate",
        "WA-headline": "Weather App",
        "WA-description":
          "The Weather App is a school project developed with JavaScript, designed to provide real-time weather data for any entered city. This application exemplifies my ability to apply coding knowledge to practical scenarios, enabling users to obtain current weather information with a simple city name input and a keystroke, illustrating my foundational skills in JavaScript and API integration.",
        "BANK-headline": "BANKIST",
        "BANK-description":
          "BANKIST is a project born from my desire to hone my JavaScript skills, resulting in the creation of a simulated bank website. This endeavor allowed me to explore JavaScript in depth, applying its principles to simulate banking operations and interactions, thereby enhancing my understanding of web development and financial applications.",
        "OK-headline": "OMA's KLEIDERSCHRANK",
        "OK-description":
          "This project entailed developing a website for a second-hand clothing shop using React. Despite the shop's closure, the website remains a testament to my capabilities in creating responsive and user-friendly e-commerce platforms, showcasing my skills in front-end development and my ability to deliver projects with a strong visual and functional appeal.",
        "SP-headline": "SMALL PROJECTS",
        "SP-description":
          "This collection of small projects serves as a playground for my JavaScript skills, encompassing a variety of fun applications, riddles, and games. Each project within this category is an opportunity to experiment with new ideas, refine programming techniques, and engage users with interactive and entertaining digital experiences."
      }
    }
  },
  hu: {
    translation: {
      menu: {
        home: "főoldal",
        "about me": "rólam",
        projects: "munkáim",
        contact: "kontakt",
        wdp: "webfejlesztő portfólió",
        skills: "készségek",
        knowledge: "tapasztalat, nyelvek, képzettség",
        introduction: "bemutatkozás"
      },
      landing: {
        hello: "Üdvözöllek, Alexandra vagyok",
        developer: "junior programozó & analyst",
        ecoinfo: "gazdaságinformatikai háttérrel",
        long: "Frontend fejlesztéssel foglalkozom, átlátható és felhasználóbarát felületeket tervezek és fejlesztek. Nézd meg a projektjeimet, és vedd fel velem a kapcsolatot."
      },
      introduction: {
        description:"Frontend fejlesztőként modern, felhasználóközpontú webalkalmazások készítésére törekszem. Szenvedélyem az új technológiák felfedezése és a folyamatos fejlődés.",
        more: "tovább olvasom",
        1: "A nevem Alexandra, és kezdő software developer ként több mint egy éves tapasztalattal rendelkezem a webes technológiák világában. A harmadik évemet fejezem be az egyetemen ahol gazdaságinformatikát tanulok és várhatóan 2026 végén végzek. Régebben cukrász vezetőként és menedzserként dolgoztam, de mindig nagyobb kihívásra vágytam. Angolul folyékonyan beszélek, főleg mivel mindennap használom és jelenleg az olaszt tanulom.",
        2: "Folyamatosan törekszem arra, hogy naprakész maradjak a legújabb frontend technológiák és trendek terén. Hiszem, hogy a folyamatos tanulás és fejlődés kulcsfontosságú , és motivált vagyok abban, hogy tovább bővítsem szakmai tudásomat. ",
        3: "Hosszabb távon a frontend fejlesztés mellett a mesterséges intelligencia és az adatelemzés irányába szeretném bővíteni szakmai tudásomat."
      },
      helmet: {
        projects: "Projektek",
        main: "Alexandra Hegedüs | Front-End Developer & Data Analyst",
        pro_desc:
          "Fedezd fel a portfólióm amely bemutatja kezdeti projektjeimet, mindegyiket úgy alkottam meg, hogy betekintést nyújtsanak a fejlődésemben a webfejlesztés terén. ​",
        h1: "Szeretettel meghívlak, hogy nézd meg projektjeimet."
      },
      knowledge: {
        description:"A technikai tudás mellett fontosnak tartom a folyamatos fejlődést, a problémamegoldást és a hatékony együttműködést. Az itt felsorolt készségek azok a területek, amelyekre a mindennapi munkám során építek, és amelyeket folyamatosan fejlesztek.",
        technical_skills: "Technikai kompetenciák",
        soft_skills: "Soft Skillek",
        lang_skills: "Nyelvtudás",
        soft_skills_des:
          "A mai gyorsan fejlődő szakmai világban egyre inkább a figyelem középpontjába kerülnek azok a készségek, amelyeket a számítógépek nem automatizálhatnak, és a tesztek nem mérhetnek le. Az olyan kulcskészségek elsajátítása, mint a gyors tanulás, a kreatív problémamegoldás, az alkalmazkodóképesség, az empátia, a tiszta kommunikáció és a csapatmunka, nemcsak hogy kiemel, de véleményem szerint össze is hozza az embereket, így minden kihívás kezelhetőbbé válik.",
        eng: "Angol",
        eng_level: "C2",
        gimn: "Kéttannyelvű Gimnázium",
        ten_years: "10 évig éltem külföldön és dolgoztam vezetőként",
        hun: "Magyar",
        hun_level: "Anyanyelv",
        ita: "Olasz",
        ita_level: "Kezdő",
        ger: "Német",
        EI: "GazdaságInformatika",
        frontend: "Frontend Fejlesztés - Mobil app és Weblap"
      },
      projects: {
        description:"Ezek a privát projektek tükrözik kezdő fejlesztői utamat és azokat a technológiákat, amelyekkel a legszívesebben dolgozom. Minden alkalmazás egy-egy valós probléma megoldására készült, miközben lehetőséget adott új eszközök és módszerek elsajátítására. A munkahelyeimen végzett munkámat nem oszthatom meg. ",
        "check":"megnézem",
        "GF-headline": "GolfRacks",
        "GF-description":
          "A GolfRacks egy mobilalkalmazás-projekt (React Native-ben készült), amelyben aktívan részt vettem mint a Vamosoft fejlesztője. A projekt túlmutat magán az alkalmazáson, egy egyszerű weboldalt is magában foglal, amelynek célja az alkalmazás letöltésének megkönnyítése asztali környezetből.",
        "PAT-headline": "Az én cukrász portfólióm",
        "PAT-description":
          "Ez az én saját egyszerű cukrász weboldalam ami React-tal készült",
        "WA-headline": "Időjárás App",
        "WA-description":
          "Az Időjárás App egy iskolai projekt, amely JavaScripttel készült, célja, hogy valós idejű időjárás-adatokat biztosítson bármely megadott városra. Ez az alkalmazás példázza képességemet a kódolási ismeretek gyakorlati helyzetekben való alkalmazására, lehetővé téve a felhasználók számára, hogy egyszerű városnév bevitellel és egy billentyűleütéssel aktuális időjárás-információkat szerezzenek, bemutatva alapvető JavaScript és API integrációs készségeimet.",
        "BANK-headline": "BANKIST",
        "BANK-description":
          "A BANKIST egy olyan projekt, amely a JavaScript készségeim fejlesztési vágyából született, egy szimulált banki weboldal létrehozásával. Ez az erőfeszítés lehetővé tette számomra, hogy mélyrehatóan megismerjem a JavaScriptet, alkalmazva annak elveit a banki műveletek és interakciók szimulálására, ezzel bővítve webfejlesztési és pénzügyi alkalmazásokkal kapcsolatos ismereteimet.",
        "OK-headline": "OMA's KLEIDERSCHRANK",
        "OK-description":
          "Ez a projekt egy használtruha-üzlet weboldalának fejlesztését foglalta magában React használatával. Bár az üzlet bezárt, a weboldal továbbra is tanúbizonysága képességeimnek a reagálóképes és felhasználóbarát e-kereskedelmi platformok létrehozásában, bemutatva a front-end fejlesztésben szerzett készségeimet és képességemet a vizuálisan vonzó és funkcionálisan meggyőző projektek szállítására.",
        "SP-headline": "Kis Projektek",
        "SP-description":
          "Ez a kis projektek gyűjteménye játszóteret biztosít JavaScript készségeim számára, számos szórakoztató alkalmazást, rejtvényt és játékot magában foglalva. E kategórián belüli minden projekt lehetőséget biztosít új ötletek kipróbálására, a programozási technikák finomítására és a felhasználók interaktív és szórakoztató digitális élményekkel való megnyerésére."
      }
    }
  },
  it: {
    translation: {
      menu: {
        home: "home",
        "about me": "su di me",
        projects: "progetti",
        contact: "contatto",
        wdp: "portfolio di sviluppatore web",
        skills: "competenze",
        knowledge: "esperienza, lingue, istruzione",
        introduction: "introduzione"
      },
      landing: {
        hello: "Ciao, sono Alexandra",
        developer: "junior programmatrice & analista",
        ecoinfo: "con background in informatica gestionale",
        long: "Mi occupo di sviluppo frontend, creando interfacce web chiare e responsive con attenzione all’usabilità. Esplora i miei progetti e contattami liberamente."
      },
      introduction: {
        description:"Sviluppatrice frontend appassionata della creazione di applicazioni web moderne e orientate all'utente. Sempre motivata a imparare nuove tecnologie e a migliorare le mie competenze.",
        more: "continuo a leggere",
        1: "Mi chiamo Alexandra e, come sviluppatrice frontend principiante entusiasta, ho più di un anno di esperienza nel mondo delle tecnologie web. Attualmente sto attivamente ampliando le mie conoscenze sia nelle aree pratiche che teoriche mentre studio informatica aziendale all'università. Nell'ultimo anno, ho partecipato a numerosi progetti. Sono orgogliosa di essere in grado di creare siti web dinamici e responsivi che non sono solo esteticamente attraenti ma si adattano anche alle esigenze degli utenti.",
        2: "Mi impegno costantemente a rimanere aggiornata sulle ultime tecnologie e tendenze frontend, partecipando regolarmente a corsi online e workshop. Credo che l'apprendimento continuo e lo sviluppo siano cruciali nel settore tecnologico, e sono motivata ad ampliare ulteriormente le mie conoscenze professionali. Il mio obiettivo è far parte di un team dove posso condividere le mie esperienze precedenti e lavorare insieme su progetti eccitanti, acquisendo nel contempo ulteriore esperienza. Credo che la combinazione di creatività, lavoro di squadra e innovazione tecnologica possa raggiungere risultati veramente impressionanti. Sono entusiasta di scoprire quali sfide e opportunità incontrerò in futuro nel campo dello sviluppo frontend."
      },
      helmet: {
        projects: "Progetti",
        main: "Alexandra Hegedüs | Front-End Developer & Data Analyst",
        pro_desc:
          "Esplora il mio portfolio mette in mostra i miei primi progetti, ognuno creato per offrire uno sguardo al mio viaggio e alla mia crescita nello sviluppo web. ​",
        h1: "Vi invito calorosamente a esplorare i miei progetti ​"
      },
      knowledge: {
        description:"Oltre alle competenze tecniche, considero fondamentali l'apprendimento continuo, la capacità di risolvere problemi e la collaborazione efficace. Le competenze elencate qui rappresentano le aree su cui faccio affidamento ogni giorno e che continuo a sviluppare nel mio percorso professionale.",
        technical_skills: "Competenze Tecniche",
        soft_skills: "Competenze Trasversali",
        lang_skills: "Competenze Linguistiche",
        soft_skills_des:
          "Nel panorama professionale in rapida evoluzione di oggi, l'attenzione si concentra sempre più su un insieme di competenze che i computer non possono automatizzare e gli esami non possono quantificare: le soft skills. Padronizzare abilità chiave come l'apprendimento rapido, la risoluzione creativa dei problemi, l'adattabilità, l'empatia, la comunicazione chiara e il lavoro di squadra non solo ti distingue, ma unisce anche le persone, rendendo ogni sfida un po' più gestibile e ogni successo una gioia condivisa.",
        eng: "Inglese",
        eng_level: "C2",
        gimn: "Liceo Bilingue",
        ten_years: "Ho vissuto all'estero per 10 anni",
        hun: "Ungherese",
        hun_level: "Madrelingua",
        ita: "Italiano",
        ita_level: "Principiante",
        ger: "Tedesco",
        EI: "Informatica Economica",
        frontend: "Sviluppo Frontend - App mobile e Sito web"
      },
      projects: {
        description:"Questi progetti rappresentano il mio percorso come sviluppatrice e le tecnologie con cui mi piace lavorare. Ogni applicazione è stata creata per risolvere problemi reali e allo stesso tempo approfondire nuove competenze e strumenti di sviluppo.",
        "check":"check it out",
        "GF-headline": "GolfRacks",
        "GF-description":
          "GolfRacks rappresenta un progetto di applicazione mobile (realizzato con React Native) in cui ho partecipato attivamente come sviluppatore di Vamosoft. Il progetto va oltre l'applicazione stessa, incorporando un sito web semplice progettato per facilitare il download dell'app da un ambiente desktop.",
        "PAT-headline": "My Patissier Portfolio",
        "PAT-description":
          "This is my own Patissier Portfolio site made with React and a lot of white chocolate",
        "WA-headline": "App Meteo",
        "WA-description":
          "L'App Meteo è un progetto scolastico sviluppato con JavaScript, progettato per fornire dati meteorologici in tempo reale per qualsiasi città inserita. Questa applicazione esemplifica la mia capacità di applicare conoscenze di codifica a scenari pratici, consentendo agli utenti di ottenere informazioni meteorologiche attuali con un semplice inserimento del nome della città e un tasto, illustrando le mie competenze fondamentali in JavaScript e integrazione API.",
        "BANK-headline": "BANKIST",
        "BANK-description":
          "BANKIST è un progetto nato dal mio desiderio di affinare le mie competenze in JavaScript, risultando nella creazione di un sito web bancario simulato. Questo sforzo mi ha permesso di esplorare in profondità JavaScript, applicando i suoi principi per simulare operazioni e interazioni bancarie, migliorando così la mia comprensione dello sviluppo web e delle applicazioni finanziarie.",
        "OK-headline": "OMA's KLEIDERSCHRANK",
        "OK-description":
          "Questo progetto ha comportato lo sviluppo di un sito web per un negozio di abbigliamento di seconda mano utilizzando React. Nonostante la chiusura del negozio, il sito web rimane una testimonianza delle mie capacità nella creazione di piattaforme di e-commerce reattive e user-friendly, dimostrando le mie competenze nello sviluppo front-end e la mia capacità di consegnare progetti con un forte appeal visivo e funzionale.",
        "SP-headline": "Piccoli Progetti",
        "SP-description":
          "Questa collezione di piccoli progetti funge da campo di prova per le mie competenze in JavaScript, comprendendo una varietà di applicazioni divertenti, indovinelli e giochi. Ogni progetto all'interno di questa categoria è un'opportunità per sperimentare nuove idee, affinare le tecniche di programmazione e coinvolgere gli utenti con esperienze digitali interattive e divertenti."
      }
    }
  }
};

export default resources;
