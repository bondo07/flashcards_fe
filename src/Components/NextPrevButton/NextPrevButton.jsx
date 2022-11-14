import './NextPrevButton.css'

const NextPrevButton = ({cards, currentCardNum, setCurrentCardNum, currentCard}) => {
    
    const handleNextCard = () => {
        const next = currentCardNum + 1;
        if(next + 1 > cards.length)
        {setCurrentCardNum(0)}
        else {
            setCurrentCardNum(next)
        }
    }

    const handlePrevCard = () => {
        const prev = currentCardNum - 1;
        if(prev < 0)
        {setCurrentCardNum(cards.length - 1)}
        else {
            setCurrentCardNum(prev)
        }

    }


    return ( 
        <>
            <div>
                <button className='prev-button' onClick={handleNextCard}>&#8249;</button>
            </div>
            <div>
                <button className='next-button' onClick={handlePrevCard}>&#8250;</button>
            </div>
        </>
     );
}
 
export default NextPrevButton;