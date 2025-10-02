import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './Flashcard';

function App() {
  const cards = [
  {
    "question": "What does 'Generative AI' mean?",
    "answer": "AI that creates new content such as text, images, audio, or code."
  },
  {
    "question": "What does 'GAN' stand for?",
    "answer": "Generative Adversarial Network."
  },
  {
    "question": "What are the two parts of a GAN?",
    "answer": "Generator and Discriminator."
  },
  {
    "question": "What does 'LLM' stand for?",
    "answer": "Large Language Model."
  },
  {
    "question": "Give an example of a popular LLM.",
    "answer": "GPT (Generative Pretrained Transformer)."
  },
  {
    "question": "What is a 'prompt' in Generative AI?",
    "answer": "Input text or data given to guide the model’s output."
  },
  {
    "question": "What is 'diffusion' used for?",
    "answer": "Generating images by gradually removing noise."
  },
  {
    "question": "Name a common use of Generative AI in art.",
    "answer": "Text-to-image generation."
  },
  {
    "question": "What is 'hallucination' in LLMs?",
    "answer": "When a model generates false or made-up information."
  },
  {
    "question": "What does 'pretraining' mean?",
    "answer": "Training a model on large datasets before fine-tuning."
  }
]
  const [id, setID] = useState(0) 
  const handleNext = () => {
    if (id + 1 < cards.length) {
      setID(id + 1);
    }
  };

return (
    <div>
      <h1> GenAI Trivia Deck </h1>
      <p> This deck is designed to help review and reinforce basic knowledge about generative AI. </p>
      <p> Total count: {cards.length} </p>
      <Flashcard card = {cards[id]}></Flashcard> 
      <button onClick = {handleNext} disabled = {id === cards.length - 1} >
        Next
      </button>
    </div>
  )
 
  
}

export default App
