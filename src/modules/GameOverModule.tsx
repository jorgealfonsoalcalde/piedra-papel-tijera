import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import useScoreStore from "../store/ScoreStore";


const GameOverModule = () => {
    const setStep = useGameStore(state => state.setStep);
    const resetScore = useScoreStore(state => state.resetScore);

    const onCLickPlayAgain = () => {
        setStep(STEPS.SELECTION);
        resetScore();
    }
    return (
        <button className="bg-gray-400 hover:bg-gray-600 w-40 py-3 px-4 rounded-lg text-xl m-auto text-white block" onClick={onCLickPlayAgain}>Jugar de nuevo</button>
    )
}

export default GameOverModule;