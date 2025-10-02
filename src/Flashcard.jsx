import { useState, useEffect } from "react";



function Flashcard({card}) {
    const [isFront, setIsFront] = useState(true); 

    useEffect(() => {
        setIsFront(true);
    }, [card]); 
    
    
    return (
        <div onClick = {() => setIsFront(!isFront)} 
        >
         {isFront ? card.question : card.answer}
        </div>

    );
}

export default Flashcard;