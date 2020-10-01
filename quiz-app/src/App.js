import React, { useState, useEffect } from 'react';
import FlashcardList from './Components/FlashcardList';
import './app.css'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASH_CARDS)

  useEffect(() => {
    axios

      .get('https://opentdb.com/api.php?amount=10')
      .then(res =>{

        setFlashcards(res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer)
          const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), answer]
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
        console.log(res.data)
      })
  }, [])

  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <div>
        <FlashcardList flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASH_CARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'What is 2 + 5?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
]

export default App;
