import useScoreStore from "../store/ScoreStore"


const Score = () => {
    /*const [score, maxScore] = useScoreStore(state => [state.score, state.maxScore]);*/
    const score = useScoreStore(state => state.score);
    const maxScore = useScoreStore(state => state.maxScore);

    return (
        <div className="w-81 m-auto flex justify-center py-12">
            <span className="text-3xl mr-6">Puntuación: {score}</span>
            <span className="text-3xl">Puntuación más alta: {maxScore}</span>
        </div>
    )
}

export default Score;