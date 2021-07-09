import { useSelector } from "react-redux";
import { useState } from "react";


const Question = () => {
     const state = useSelector(state => state)
     let [count, setcount] = useState(0)
     let [score, setscore] = useState(0)
     const [totalScore,settotalScore] = useState(80)
     console.log(state)
     console.log(state.questions.length)
     console.log(score)
     console.log(totalScore)

     const check = (e) => {

          console.log(e)
          if (count < state.questions.length) {
               setcount(count + 1)
               console.log(`chota hai abhi tk COUNT =>>>>>>${count} `)
          }
          if (e === state.questions[count].Answer) {
               setscore(score + 10)
          }
          // if(count === state.questions.length){
          //      setcount(count=0)
          // }

     }

     return (
          <div className="quiz">

               

               {
                    count < state.questions.length ?
                         <h1>
                              QUIZ APP
                              <br/>
                              <br/>
                              Question {count+1}) {state.questions[count].Question} <br />



                              <button value={state.questions[count].option1} onClick={(e) => check(e.target.value)}>
                                   {state.questions[count].option1}
                              </button>
                              <br />

                              <button value={state.questions[count].option2} onClick={(e) => check(e.target.value)}>
                                   {state.questions[count].option2}
                              </button>
                              <br />
                              <button value={state.questions[count].option3} onClick={(e) => check(e.target.value)}>
                                   {state.questions[count].option3}
                              </button>
                              <br />
                              <button value={state.questions[count].option4} onClick={(e) => check(e.target.value)}>
                                   {state.questions[count].option4}
                              </button>

                         </h1>

                         : <h1>
                              RESULT 
                              <br/>
                              <br/>
                            
                              YOUR SCORE IS {score} OUT OF {state.questions.length * 10} <br/>
                              YOUR PERCENTAGE IS {score/totalScore*100}%
                         </h1>}






          </div>
     )
}

export default Question;