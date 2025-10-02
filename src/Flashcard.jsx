import { useState, useEffect } from "react";
import "./Flashcard.css"; 

function Flashcard({ card }) {
  const [isFront, setIsFront] = useState(true);

    useEffect(() => {
        setIsFront(true);
    }, [card]);

    return (
        <div className="flashcard-wrapper" onClick={() => setIsFront(!isFront)}>
        <div className={`flashcard ${isFront ? "" : "flipped"}`}>
            <div className="front">
            {card.question}
            </div>
            <div className="back">
            {card.answer}
            </div>
        </div>
        </div>
    );
    }

    export default Flashcard;