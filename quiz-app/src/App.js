import React, { useState } from 'react';
import FlashcardList from './Components/FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASH_CARDS)

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
    question: 'What is 2 + 3?',
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
