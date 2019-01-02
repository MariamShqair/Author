import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';

class App extends Component {
  state={
    questions:[{
      image:"1.jpg",
      choices:["answer1","answer2","answer3","answer4"],
      correctAnswer:"answer1",
      background:"#ccc"
    },
    {
      image:"2.jpg",
      choices:["answer1","answer2","answer3","answer4"],
      correctAnswer:"answer2",
      background:"#ccc"
    },
    {
      image:"3.jpg",
      choices:["answer1","answer2","answer3","answer4"],
      correctAnswer:"answer2",
      background:"#ccc"
    }],
    rendQuestion:{
      image:"2.jpg",
      choices:["answer1","answer2","answer3","answer4"],
      correctAnswer:"answer2",
      background:"#ccc"
    }
  }
  handleChooseAnswer = (choice,question)=>{
    let {questions ,rendQuestion} = this.state
    if(question.correctAnswer === choice)
        {
          rendQuestion.background = "green" 
          this.setState({rendQuestion})
        }
    else
      question.background = "red"

      if(rendQuestion.background === "green")
        this.randQuestion()
     
      this.setState({questions})
  }
  randQuestion = () => {
    
    let {questions ,rendQuestion} = this.state
     rendQuestion = questions[Math.floor(Math.random() * questions.length)]
    this.setState({rendQuestion})
  }
  render() {
    let {rendQuestion ,questions} = this.state
      console.log(rendQuestion.background)
    

    return (
      <div className="App">
        <Header></Header>
        {<Question newColor={this.state.rendQuestion.background} handleChooseAnswer={this.handleChooseAnswer} question={this.state.rendQuestion} ></Question>}
        
      </div>
    );
  }
}

export default App;
