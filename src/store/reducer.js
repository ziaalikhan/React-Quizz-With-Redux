const INTIAL_STATE = {
    questions : [
     {
          Question : "WHAT IS THE FULL FORM OF HTML?",
          option1 :"HYPERTYPE MARKUP LANGUAGE",
          option2 :"HYPERTEXT MAKEUP LANGUAGE",
          option3 :"HYPERTEXT MARKUP LANGUAGE",
          option4 : "HARDTEXT MADE LANGUAGE",
          Answer  : "HYPERTEXT MARKUP LANGUAGE"
          
     },
     {
          Question : "Full form of JS?",
          option1 : "JalaScript",
          option2 : "JavaScript",
          option3 : "JabaScript",
          option4 : "JavaSite",
          Answer  : "JavaScript"
     },
     {
          Question : "React is a _______ library",
          option1 : "JavaScript library",
          option2 : "Java library",
          option3 : "Python library",
          option4 : "Ruby library",
          Answer : "JavaScript library",
     },
     {
         Question : "Full form of CSS?",
         option1 : "Cat Style Sheets",
         option2 : "Cascading Style Sheets",
         option3 : "Cas Style Sheets",
         option4 : "Cascading Style Sheeps",
         Answer  : "Cascading Style Sheets"
    },
    {
         Question : "Captial of Pakistan",
         option1 : "Delhi",
         option2 : "Karachi",
         option3 : "Dhaka",
         option4 : "Islamabad",
         Answer  : "Islamabad"
    },
    {
         Question : "Biggest City of Pakistan",
         option1 : "Karachi",
         option2 : "Lahore",
         option3 : "Hyderabad",
         option4 : "Islamabad",
         Answer  : "Karachi"
    },
    {
         Question : "Founder of JavaScript",
         option1 : "Elon Musk",
         option2 : "Brendan Eich",
         option3 : "Bill Gates",
         option4 : "Zia Khan",
         Answer  : "Brendan Eich"
    },
    {
         Question : "Full form of CPU",
         option1 : "Central Processing Unit",
         option2 : "Control Processing Unit",
         option3 : "Central Person Unite",
         option4 : "Control Prison Utility",
         Answer  : "Central Processing Unit"
    },
    ]
}

 const reducer = (state = INTIAL_STATE) => state

export default reducer;