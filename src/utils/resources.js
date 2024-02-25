/* 
main.title should be less than 70 more than 20 char
main.desc should be less than 170 char */


const resources = {   
    en: {
      translation: { 
        'menu':{
          'about':"about me",
          'projects':"projects",
          'contact':"contact"
        },
        'landing':{
          'hello':'Hello dear visitor!'
        }
      }
    },
    hu: {
      translation: { 
        'menu':{
          'about':"rólam",
          'projects':"projektek",
          'contact':"kontakt"
        },
        'landing':{
          'hello':'Üdvözöllek az oldalon!'
        }
      }
    },
    it: {
      translation: { 
        "menu": {
          "about": "su di me",
          "projects": "progetti",
          "contact": "contatto"
        },
        'landing':{
          'hello':'Hello dear visitor!'
        }
      }
    },
    
  };
  
  export default resources