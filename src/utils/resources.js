/* 
main.title should be less than 70 more than 20 char
main.desc should be less than 170 char */

const resources = {
  hu: {
    translation: {
      menu: {
        home: "főoldal",
        "about me": "pár szó rólam",
        projects: "projektek",
        wdp: "webfejlesztő portfólió",
        skills: "készségeim",
        knowledge: "tapasztalat, nyelvek, képzettség",
        introduction: "bemutatkozás"
      },
      landing: {
        hello: "Üdvözöllek, Alexandra vagyok",
        developer: "junior programozó & adatelemző",
        long: "Gazdaságinformatikus hallgató vagyok az egyetem utolsó félévében, frontend fejlesztési tapasztalattal."
      },
      introduction: {
        description:
          "Sokáig dolgoztam cukrász vezetőként, ma pedig gazdaságinformatikus hallgatóként és frontend fejlesztőként építem a jövőmet. A logikus gondolkodás, az adatok világa és a felhasználóbarát megoldások tervezése áll hozzám a legközelebb.",
        1: "A nevem Hegedűs Alexandra. Jelenleg gazdaságinformatikus hallgató vagyok, az egyetemi tanulmányaim utolsó szakaszában, emellett frontend fejlesztéssel foglalkozom.",
        2: "Pályafutásom első tíz évét a cukrásziparban töltöttem, ahol vezetőként dolgoztam. Bár szerettem a szakmámat, mindig is vonzott a programozás világa. Gyerekkorom óta közel áll hozzám a matematika, a logikai problémák megoldása és az összetett folyamatok megértése. Ez vezetett ahhoz, hogy új irányba induljak, és az informatika területén építsem tovább a karrieremet.",
        3: "Kétnyelvű gimnáziumban tanultam, felsőfokon beszélek angolul, jelenleg pedig olaszul tanulok. Munkám során több országban is éltem és dolgoztam, többek között Svájcban, Svédországban és Franciaországban. Ezek a tapasztalatok nyitottságra, alkalmazkodóképességre és nemzetközi szemléletre tanítottak.",
        4: "Különösen érdekelnek az adatok, a statisztika és az üzleti folyamatok elemzése. Lenyűgöz, hogy a megfelelő adatok és vizualizációk segítségével hogyan lehet megragadni egy folyamat lényegét, és valódi döntéstámogatást nyújtani.",
        5: "A frontend fejlesztésben ugyanazt szeretem, amit korábban a cukrászatban: olyan értéket alkotni, amely örömet és elégedettséget okoz az embereknek. Hiszek abban, hogy a jól megtervezett digitális termékeknek logikusnak, intuitívnak és vonzónak kell lenniük. Azok a megoldások inspirálnak, amelyekhez a felhasználók évekkel később is szívesen visszatérnek.",
        6: "Szabadidőmben szeretek sakkozni, olvasni és kerékpározni. Folyamatosan keresem az új kihívásokat és tanulási lehetőségeket, mert a kihivások leküzdésénél érzi az ember hogy igazán élt."
      },
      helmet: {
        main: "Hegedüs Alexandra | Frontend Fejlesztő és Adatelemző",
        pro_desc:
          "Hegedűs Alexandra portfóliója. Frontend fejlesztő és gazdaságinformatikus hallgató. React, TypeScript, React Native, GraphQL és PostgreSQL projektek, valamint adatelemzési, statisztikai és felhasználói élményre fókuszáló megoldások."
      },
      knowledge: {
        description:
          "A technikai tudás mellett fontosnak tartom a folyamatos fejlődést, a problémamegoldást és a hatékony együttműködést. Az itt felsorolt készségek azok a területek, amelyekre a mindennapi munkám során építek, és amelyeket folyamatosan fejlesztek.",
        technical_skills: "Technikai ismeret",
        soft_skills: "Soft Skillek",
        lang_skills: "Nyelvtudás",
        soft_skills_des:
          "A mai gyorsan fejlődő szakmai világban egyre inkább a figyelem középpontjába kerülnek azok a készségek, amelyeket a számítógépek nem automatizálhatnak, és a tesztek nem mérhetnek le. Az olyan kulcskészségek elsajátítása, mint a gyors tanulás, a kreatív problémamegoldás, az alkalmazkodóképesség, az átlátható kommunikáció és a csapatmunka, nemcsak hogy kiemel, de véleményem szerint össze is hozza az embereket, így minden kihívás kezelhetőbbé válik.",
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
        description:
          "Az itt bemutatott projektek a fejlesztői utamat és azokat a technológiákat tükrözik, amelyekkel a legszívesebben dolgozom. Korábbi munkahelyeimen készített projektjeimet titoktartási kötelezettség miatt nem áll módomban megosztani, ezért ezen az oldalon a saját fejlesztéseimen keresztül mutatom be tudásomat és érdeklődési területeimet.",
        check: "megnézem",
        "PAT-headline": "Cukrász Portfólió",
        "PAT-description":
          "Saját fejlesztésű portfólió weboldal egy cukrász vállalkozás számára. A projekt során a reszponzív felületek tervezésére és a felhasználói élmény optimalizálására helyeztem a hangsúlyt.\n\nStack: React, JavaScript, CSS",

        "WA-headline": "Időjárás Alkalmazás",
        "WA-description":
          "Valós idejű időjárási adatokat megjelenítő alkalmazás külső API integrációval. A projekt segített elmélyíteni az aszinkron JavaScript és az API-kezelés területén szerzett ismereteimet.\n\nStack: JavaScript, HTML, CSS, REST API",

        "BANK-headline": "Bankist",
        "BANK-description":
          "Interaktív banki alkalmazás szimuláció, amely számlakezelési és tranzakciós funkciókat modellez. A fejlesztés során a JavaScript logika, a DOM-manipuláció és az állapotkezelés gyakorlására fókuszáltam.\n\nStack: JavaScript, HTML, CSS",

        "OK-headline": "OMA's Kleiderschrank",
        "OK-description":
          "Használtruha-üzlet számára készített weboldal modern és reszponzív felhasználói felülettel. A projekt célja egy könnyen kezelhető és vizuálisan vonzó online jelenlét kialakítása volt.\n\nStack: React, JavaScript, CSS",

        "SP-headline": "Kis Projektek",
        "SP-description":
          "Különböző kisebb alkalmazások, játékok és programozási kihívások gyűjteménye. Ezek a projektek lehetőséget biztosítottak új technológiák kipróbálására és problémamegoldó készségeim fejlesztésére.\n\nStack: JavaScript, React, HTML, CSS"
      }
    }
  },
  en: {
    translation: {
      menu: {
        home: "home",
        "about me": "about me",
        projects: "projects",
        wdp: "web developer portfolio",
        skills: "skills",
        knowledge: "experience, languages, education",
        introduction: "introduction"
      },
      landing: {
        hello: "Welcome, I'm Alexandra",
        developer: "junior developer & data analyst",
        long: "Business Informatics student in the final semester of my degree with frontend development experience."
      },
      introduction: {
        description:
          "For many years I worked as a pastry shop manager, and today I am building my future as a Business Informatics student and frontend developer. Logical thinking, the world of data, and designing user-friendly solutions are what inspire me the most.",

        1: "My name is Alexandra Hegedűs. I am currently a Business Informatics student in the final stage of my studies, while also working on frontend development.",

        2: "I spent the first ten years of my career in the pastry industry, where I worked in leadership positions. Although I enjoyed my profession, I had always been drawn to the world of programming. Since childhood, I have been fascinated by mathematics, solving logical problems, and understanding complex systems. This passion ultimately led me to pursue a career in technology.",

        3: "I attended a bilingual high school, speak English at an advanced level, and am currently learning Italian. Throughout my career I have lived and worked in several countries, including Switzerland, Sweden, and France. These experiences taught me adaptability, open-mindedness, and an international perspective.",

        4: "I am particularly interested in data analysis, statistics, and business process analysis. I am fascinated by how the right data and visualizations can reveal the essence of a process and provide meaningful decision support.",

        5: "What I enjoy about frontend development is the same thing I loved about pastry making: creating something valuable that brings satisfaction and enjoyment to people. I believe that well-designed digital products should be logical, intuitive, and appealing. I am inspired by solutions that users willingly return to years later.",

        6: "In my free time I enjoy playing chess, reading, and cycling. I continuously seek new challenges and opportunities to learn because it is through overcoming challenges that we truly feel alive."
      },

      helmet: {
        projects: "projects",
        main: "Alexandra Hegedűs | Frontend Developer & Data Analyst",
        pro_desc:
          "Portfolio of Alexandra Hegedűs, Frontend Developer and Business Informatics student. Explore projects built with React, TypeScript, React Native, GraphQL, and PostgreSQL, as well as solutions focused on data analysis, statistics, and user experience."
      },

      knowledge: {
        description:
          "In addition to technical knowledge, I value continuous growth, problem-solving, and effective collaboration. The skills listed here are the areas I rely on in my daily work and continuously strive to improve.",

        technical_skills: "Technical Skills",
        soft_skills: "Soft Skills",
        lang_skills: "Languages",

        soft_skills_des:
          "In today's rapidly evolving professional world, increasing attention is being given to skills that cannot be automated by computers or measured by tests. Mastering key abilities such as fast learning, creative problem-solving, adaptability, clear communication, and teamwork not only helps people stand out but also brings them together, making every challenge more manageable.",

        eng: "English",
        eng_level: "C2",

        gimn: "Bilingual High School",

        ten_years: "10 years living abroad and working in leadership positions",

        hun: "Hungarian",
        hun_level: "Native",

        ita: "Italian",
        ita_level: "Beginner",

        ger: "German",

        EI: "Business Informatics",

        frontend: "Frontend Development - Mobile Apps & Websites"
      },

      projects: {
        description:
          "The projects presented here reflect my development journey and the technologies I enjoy working with the most. Due to confidentiality agreements, I am unable to share projects created during my professional work, so this portfolio showcases my skills and interests through personal projects.",

        check: "view project",

        "PAT-headline": "Pastry Portfolio",

        "PAT-description":
          "A custom portfolio website developed for a pastry business. The project focused on responsive design and optimizing the user experience.\n\nStack: React, JavaScript, CSS",

        "WA-headline": "Weather Application",

        "WA-description":
          "A weather application that displays real-time weather data through external API integration. This project helped deepen my understanding of asynchronous JavaScript and API communication.\n\nStack: JavaScript, HTML, CSS, REST API",

        "BANK-headline": "Bankist",

        "BANK-description":
          "An interactive banking application simulation that models account management and transaction functionality. During development, I focused on JavaScript logic, DOM manipulation, and state management concepts.\n\nStack: JavaScript, HTML, CSS",

        "OK-headline": "OMA's Kleiderschrank",

        "OK-description":
          "A website developed for a second-hand clothing store with a modern and responsive user interface. The goal was to create an easy-to-use and visually appealing online presence.\n\nStack: React, JavaScript, CSS",

        "SP-headline": "Small Projects",

        "SP-description":
          "A collection of smaller applications, games, and programming challenges. These projects provided opportunities to experiment with new technologies and strengthen my problem-solving skills.\n\nStack: JavaScript, React, HTML, CSS"
      }
    }
  },
  it: {
    translation: {
      menu: {
        home: "home",
        "about me": "chi sono",
        projects: "progetti",
        wdp: "portfolio sviluppatrice web",
        skills: "competenze",
        knowledge: "esperienza, lingue, formazione",
        introduction: "presentazione"
      },

      landing: {
        hello: "Benvenuto, sono Alexandra",
        developer: "junior programmer & analyst",
        long: "Studentessa di Informatica Aziendale all'ultimo semestre con esperienza nello sviluppo frontend."
      },

      introduction: {
        description:
          "Per molti anni ho lavorato come responsabile di pasticceria, mentre oggi sto costruendo il mio futuro come studentessa di Informatica Aziendale e sviluppatrice frontend. Il pensiero logico, il mondo dei dati e la progettazione di soluzioni intuitive e orientate all'utente sono ciò che mi appassiona di più.",

        1: "Mi chiamo Alexandra Hegedűs. Attualmente sono una studentessa di Informatica Aziendale nella fase finale dei miei studi e, parallelamente, mi occupo di sviluppo frontend.",

        2: "Ho trascorso i primi dieci anni della mia carriera professionale nel settore della pasticceria, dove ho ricoperto ruoli di responsabilità. Sebbene amassi il mio lavoro, il mondo della programmazione mi ha sempre affascinata. Fin da bambina sono stata attratta dalla matematica, dalla risoluzione di problemi logici e dalla comprensione di sistemi complessi. Questa passione mi ha portata a intraprendere un nuovo percorso nel settore tecnologico.",

        3: "Ho frequentato un liceo bilingue, parlo inglese a livello avanzato e attualmente sto studiando italiano. Durante la mia carriera ho vissuto e lavorato in diversi Paesi, tra cui Svizzera, Svezia e Francia. Queste esperienze mi hanno insegnato adattabilità, apertura mentale e una visione internazionale.",

        4: "Sono particolarmente interessata all'analisi dei dati, alla statistica e all'analisi dei processi aziendali. Mi affascina il modo in cui dati e visualizzazioni possano evidenziare gli aspetti essenziali di un processo e supportare decisioni più consapevoli.",

        5: "Ciò che amo dello sviluppo frontend è lo stesso aspetto che apprezzavo nella pasticceria: creare qualcosa di valore che porti soddisfazione e piacere alle persone. Credo che i prodotti digitali ben progettati debbano essere logici, intuitivi e coinvolgenti. Mi ispirano le soluzioni a cui gli utenti continuano a tornare anche dopo molti anni.",

        6: "Nel tempo libero mi piace giocare a scacchi, leggere e andare in bicicletta. Cerco costantemente nuove sfide e opportunità di apprendimento, perché è superando le difficoltà che ci sentiamo davvero vivi."
      },

      helmet: {
        main: "Alexandra Hegedűs | Sviluppatrice Frontend e Data Analyst",
        pro_desc:
          "Portfolio di Alexandra Hegedűs, sviluppatrice frontend e studentessa di Informatica Aziendale. Scopri progetti realizzati con React, TypeScript, React Native, GraphQL e PostgreSQL, insieme a soluzioni orientate all'analisi dei dati, alla statistica e all'esperienza utente."
      },

      knowledge: {
        description:
          "Oltre alle competenze tecniche, considero fondamentali la crescita continua, la capacità di risolvere problemi e la collaborazione efficace. Le competenze elencate qui rappresentano le aree su cui faccio affidamento nel mio lavoro quotidiano e che continuo a sviluppare.",

        technical_skills: "Competenze Tecniche",

        soft_skills: "Competenze Trasversali",

        lang_skills: "Lingue",

        soft_skills_des:
          "Nel mondo professionale odierno, in continua evoluzione, stanno assumendo sempre più importanza quelle competenze che non possono essere automatizzate dai computer o misurate da un test. Capacità come apprendimento rapido, problem solving creativo, adattabilità, comunicazione chiara e lavoro di squadra non solo aiutano a distinguersi, ma favoriscono anche la collaborazione, rendendo ogni sfida più gestibile.",

        eng: "Inglese",
        eng_level: "C2",

        gimn: "Liceo Bilingue",

        ten_years: "10 anni vissuti all'estero e in ruoli di responsabilità",

        hun: "Ungherese",
        hun_level: "Madrelingua",

        ita: "Italiano",
        ita_level: "Principiante",

        ger: "Tedesco",

        EI: "Informatica Aziendale",

        frontend: "Sviluppo Frontend - Applicazioni Web e Mobile"
      },

      projects: {
        description:
          "I progetti presentati qui rappresentano il mio percorso di crescita come sviluppatrice e le tecnologie con cui amo lavorare di più. A causa di accordi di riservatezza, non posso condividere i progetti realizzati durante la mia esperienza professionale; per questo motivo, questo portfolio mostra le mie competenze e i miei interessi attraverso progetti personali.",

        check: "visualizza",

        "PAT-headline": "Portfolio di Pasticceria",

        "PAT-description":
          "Un sito portfolio sviluppato per un'attività di pasticceria. Il progetto si è concentrato sul design responsivo e sull'ottimizzazione dell'esperienza utente.\n\nStack: React, JavaScript, CSS",

        "WA-headline": "Applicazione Meteo",

        "WA-description":
          "Applicazione che mostra dati meteorologici in tempo reale tramite integrazione con API esterne. Questo progetto mi ha aiutata ad approfondire la gestione delle API e la programmazione asincrona in JavaScript.\n\nStack: JavaScript, HTML, CSS, REST API",

        "BANK-headline": "Bankist",

        "BANK-description":
          "Simulazione di un'applicazione bancaria interattiva che riproduce la gestione dei conti e delle transazioni. Durante lo sviluppo mi sono concentrata sulla logica JavaScript, la manipolazione del DOM e i concetti di gestione dello stato.\n\nStack: JavaScript, HTML, CSS",

        "OK-headline": "OMA's Kleiderschrank",

        "OK-description":
          "Sito web sviluppato per un negozio di abbigliamento usato con un'interfaccia moderna e responsiva. L'obiettivo era creare una presenza online intuitiva e visivamente accattivante.\n\nStack: React, JavaScript, CSS",

        "SP-headline": "Piccoli Progetti",

        "SP-description":
          "Una raccolta di piccole applicazioni, giochi e sfide di programmazione. Questi progetti mi hanno dato l'opportunità di sperimentare nuove tecnologie e migliorare le mie capacità di problem solving.\n\nStack: JavaScript, React, HTML, CSS"
      }
    }
  }
};

export default resources;
