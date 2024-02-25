/* 
main.title should be less than 70 more than 20 char
main.desc should be less than 170 char */


const resources = {   
    en: {
      translation: { 
        'menu':{
          'about me':"about me",
          'projects':"projects",
          'contact':"contact",
          'wdp':"web developer portfolio",
          'skills':"skills",
          'introduction': "introduction",
        },
        'landing':{
          'hello':'Hello dear visitor!',
          'iam':'I am Alexandra a passionate ',
          'developer':'frontend developer',
          'long':'Welcome to my stylish portfolio site.I specialize in web development and love creating visually appealing websites.Explore my projects and get in touch with me.'
        },
        'introduction':{
          '1':'My name is Alexandra, and as an enthusiastic beginner frontend developer, I have more than a year of experience in the world of web technologies. I am currently actively expanding my knowledge in both practical and theoretical areas while studying business informatics at university. Over the past year, I have participated in numerous projects. I am proud to be able to create dynamic and responsive websites that are not only aesthetically appealing but also cater to user needs.',
          '2':'I continuously strive to stay up-to-date with the latest frontend technologies and trends, regularly participating in online courses and workshops. I believe that continuous learning and development are crucial in the technology sector, and I am motivated to further expand my professional knowledge. My goal is to be part of a team where I can share my experiences and work together on exciting projects while gaining further experience. I believe that the combination of creativity, teamwork, and technological innovation can achieve truly impressive results. I am excited to see what challenges and opportunities I will encounter in the future in the field of frontend development.'
        },
        'contact':{
          "namemust":"name is required",
          "nameshort":"name is too short" ,   
          "onlyalpha" :"only alphanumeric characters and spaces are allowed in the name" ,
          "invalidemail":"invalid email",
          "emailmust":"email is required"  ,
          "invalidtelephone":"Invalid telephone number",
          "telephoneshort":"telephone number is too short",
          "telephonelong" :"telephone number is too long",    
          "telephonemust" :"telephone is required for call preference",   
          "onlyreg":"only regular characters are allowed in the message",
          "privacy policy not accepted":"Privacy policy not accepted",
          "captcha not solved":"Captcha not solved",
          "form submitted successfully":"Form Successfully Submitted",
          "an error occurred'! Please try again in few minutes":"Error Occurred. Please Retry Shortly",
          "submission failed, please try again":"Submission Failed. Please Retry",
          "name":"name",
          "text":"text",
          "email":"email",
          "tel":"tel",
          "mobile":"mobile",
          "message":"message",
          "pref":"Please let us know how you'd prefer to be contacted",
          "understand": "I Agree to the",
          "privacy policy":"privacy policy",
          "the privacy policy":"privacy policy",
          "submit":"submit",
          "CONTACT ME":'CONTACT ME',
          'lets': "let's speak",
          'thank':"Thank you for the interest soon I will get in touch with you!"
        }
      }
    },
    hu: {
      translation: { 
        'menu':{
          'about me':"rólam",
          'projects':"projektek",
          'contact':"kontakt",
          'wdp':"webfejlesztő portfólió",
          'skills':"képességek",
          'introduction': "bemutatkozás",
        },
        'landing':{
          'hello':'Üdvözöllek az oldalon!',
          'iam':'Alexandra vagyok, elhivatott ',
          'developer':'frontend developer',
          'long':'Üdvözlök mindenkit a portfólió oldalamon! Webfejlesztésre szakosodtam, és imádok vizuálisan vonzó weboldalakat készíteni. Böngéssz a projektek között és ne habozz, keress meg!',
        },
        'introduction':{
          '1':' A nevem Alexandra, és lelkes kezdő frontend fejlesztőként több mint egy éves tapasztalattal rendelkezem a webes technológiák világában. Jelenleg aktívan bővítem tudásomat mind a gyakorlati, mind az elméleti területeken, miközben gazdaságinformatikát tanulok egyetemen. Az elmúlt év során számos projektben vettem részt. Büszke vagyok arra, hogy képes vagyok dinamikus és responsív weboldalakat létrehozni, amelyek nem csak esztétikailag vonzóak, hanem a felhasználói igényekhez is igazodnak.',
          '2':'Folyamatosan törekszem arra, hogy naprakész maradjak a legújabb frontend technológiák és trendek terén, és rendszeresen részt veszek online kurzusokon és workshopokon. Hiszem, hogy a folyamatos tanulás és fejlődés kulcsfontosságú a technológiai ágazatban, és motivált vagyok abban, hogy tovább bővítsem szakmai tudásomat. Célom, hogy egy olyan csapat részese legyek, ahol megoszthatom eddigi tapasztalataimat és együtt dolgozhatunk izgalmas projekteken, miközben további tapasztalatokat szerezhetek. Hiszem, hogy a kreativitás, a csapatmunka és a technológiai innováció kombinációja képes valóban lenyűgöző eredményeket elérni. Izgatottan várom, hogy a jövőben milyen kihívásokkal és lehetőségekkel találkozom a frontend fejlesztés területén.'
        },
        'contact':{
          "namemust":'A név megadása kötelező',
          "nameshort":"A név túl rövid" ,   
          "onlyalpha" :"A névben csak alfanumerikus karakterek és szóközök engedélyezettek" ,
          "invalidemail":"Érvénytelen e-mail cím",
          "emailmust":"E-mail megadása kötelező"  ,
          "invalidtelephone":"Érvénytelen telefonszám",
          "telephoneshort":"A telefonszám túl rövid",
          "telephonelong" :"A telefonszám túl hosszú",    
          "telephonemust" :"Hívási preferencia esetén a telefonszám megadása kötelező" ,   
          "onlyreg":"Az üzenetben csak normál karakterek engedélyezettek",
          "privacy policy not accepted": "Adatvédelmi irányelvek nincsenek elfogadva",
          "captcha not solved": "Captcha nincs megoldva",
          "form submitted successfully": "Az űrlap sikeresen elküldve",
          "an error occurred! Please try again in few minutes": "Hiba történt! Kérjük, próbálja újra néhány perc múlva",
          "submission failed, please try again": "A beküldés nem sikerült, kérjük, próbálja újra",
          "name": "név",
          "text": "szöveg",
          "email": "e-mail",
          "tel": "telefon",
          "mobile": "mobil",
          "message": "üzenet",
          "pref": "E-mailben vagy telefonon , szeretné felvenni a kapcsolatot?",
          "understand": "Igen, megértettem és elfogadom az",
          "privacy policy": "adatvédelmi irányelvek",
          "the privacy policy": "adatvédelmi irányelveket",
          "submit": "küldés",
          "CONTACT ME":"Lépjünk kapcsolatba",
          'lets': "Beszéljünk!",
          'thank':"Köszönöm az érdeklődést,hamarosan jelentkezem!"
        }
      }
    },
    it: {
      translation: { 
        "menu": {
          "about me": "su di me",
          "projects": "progetti",
          "contact": "contatto",
          'wdp':"portfolio di sviluppatore web",
          'skills':"competenze",
          'introduction': "introduzione",
        },
        'landing':{
          'hello':'Ciao caro visitatore!' ,
          'iam':'Sono Alexandra, una appassionata',
          'developer':' frontend developer',
          'long':'Benvenuti nel mio elegante sito portfolio. Mi specializzo nello sviluppo web e adoro creare siti web visivamente accattivanti. Esplora i miei progetti e mettiti in contatto con me.',
        },
        'introduction':{
          '1':"Mi chiamo Alexandra e, come sviluppatrice frontend principiante entusiasta, ho più di un anno di esperienza nel mondo delle tecnologie web. Attualmente sto attivamente ampliando le mie conoscenze sia nelle aree pratiche che teoriche mentre studio informatica aziendale all'università. Nell'ultimo anno, ho partecipato a numerosi progetti. Sono orgogliosa di essere in grado di creare siti web dinamici e responsivi che non sono solo esteticamente attraenti ma si adattano anche alle esigenze degli utenti.",
          '2':"Mi impegno costantemente a rimanere aggiornata sulle ultime tecnologie e tendenze frontend, partecipando regolarmente a corsi online e workshop. Credo che l'apprendimento continuo e lo sviluppo siano cruciali nel settore tecnologico, e sono motivata ad ampliare ulteriormente le mie conoscenze professionali. Il mio obiettivo è far parte di un team dove posso condividere le mie esperienze precedenti e lavorare insieme su progetti eccitanti, acquisendo nel contempo ulteriore esperienza. Credo che la combinazione di creatività, lavoro di squadra e innovazione tecnologica possa raggiungere risultati veramente impressionanti. Sono entusiasta di scoprire quali sfide e opportunità incontrerò in futuro nel campo dello sviluppo frontend."
        },
        'contact':{
          "namemust":'Il nome è richiesto',
          "nameshort":"Il nome è troppo corto" ,   
          "onlyalpha" :"Nel nome sono consentiti solo caratteri alfanumerici e spazi" ,
          "invalidemail":"E-mail non valida",
          "emailmust":"L'e-mail è richiesta"  ,
          "invalidtelephone":"Numero di telefono non valido",
          "telephoneshort":"Il numero di telefono è troppo corto",
          "telephonelong" :"Il numero di telefono è troppo lungo",    
          "telephonemust" :"Il telefono è richiesto per la preferenza di chiamata" ,   
          "onlyreg":"Nel messaggio sono consentiti solo caratteri regolari",
          "privacy policy not accepted": "Informativa sulla privacy non accettata",
          "captcha not solved": "Captcha non risolto",
          "form submitted successfully": "La richiesta è stata inviata con successo",
          "an error occurred! Please try again in few minutes": "Si è verificato un errore! Riprova tra qualche minuto",
          "submission failed, please try again": "Invio non riuscito, riprova",
          "name": "nome",
          "text": "testo",
          "email": "email",
          "tel": "telefono",
          "mobile": "cellulare",
          "message": "messaggio",
          "pref": "Fateci sapere come preferireste essere contattati",
          "understand": "Capisco e accetto l'",
          "privacy policy": "informativa sulla privacy",
          "the privacy policy": "informativa sulla privacy",
          "submit": "invia",
          "CONTACT ME": "CONTATTI",
          'lets':'sentiamoci',
          "thank":"grazie per l'interesse, presto sarai ricontattato"
        }
      }
    },
    
  };
  
  export default resources