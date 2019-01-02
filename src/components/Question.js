import React from 'react';

const Question = ({newColor,question,handleChooseAnswer}) => {
  
   
    return ( <div className="question" style={{background:newColor}} >
        <div className="image">
            <img src={"./images/" + question.image}></img>
        </div>
        <div>
            <ul>
                
               {question.choices.map(( choice ,key) => <a onClick={e =>handleChooseAnswer(choice,question)}>{choice}</a>)} 
            </ul>

        </div>
    </div> );
}
 
export default Question;
