import './Game.css';
import {useState} from 'react'

const Game = ({questions}) => {
  
    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[score, setScore] = useState(0);
    const[scoreScreen, setScoreScreen] = useState(false);
    const[className, setClassName] = useState();
    
    const retry = () => {
        setCurrentQuestion(0)
        setScore(0);
        setScoreScreen(false);
    }

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            //show score
            setScoreScreen(true)
        }
    }

    const handleClickButton = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1);
            setTimeout(function () {
                setClassName('right-answer');
                setTimeout(function () {
                    setClassName();
                    nextQuestion();
                }, 400);
            }, 100);
        } else if(isCorrect === false){
            setTimeout(function () {
                setClassName('right-answer');
                setTimeout(function () {
                    setClassName();
                    nextQuestion();
                }, 400);
            }, 100);
        }

    }

   

  return (
    <div>
        <div className="container">
            {scoreScreen ? (
                <div className="score-container">
                    <h1 className="question-text">
                        <lord-icon
    src="https://cdn.lordicon.com/htdttjjb.json"
    trigger="loop"
    colors="primary:#ffffff"
    style={{width:"150px",height:"150px"}}>
</lord-icon>Sua pontuação é {score}/{questions.length}</h1>
                    <button onClick={retry}>Reiniciar</button>
                </div>
            ) : (
            <div className="question-container">
                <h1 className="question-text">{questions[currentQuestion].questionText}</h1>
                {questions[currentQuestion].answerOptions.map(
                    (answerOption) => 
                    <button className={answerOption.isCorrect && className} key={Math.random()} onClick={() => handleClickButton(answerOption.isCorrect)}>
                        {answerOption.answerText}
                    </button>
                    )}
            </div>
            )}
        </div>
    </div>
  )
}

export default Game