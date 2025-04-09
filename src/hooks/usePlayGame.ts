import { useCallback, useState } from "react";
import { Answer } from "../types/answer";
import { Status } from "../types/status";
import { ANSWERS } from "../constants/answers";
import { STATUS } from "../constants/status";

const usePlayGame = () => {
    const [status, setStatus] = useState<Status | null>(null);
    const [cpuAnswer, setCpuAnswer] = useState<Answer | null>(null);

    const generateCpuChoice = useCallback((choice: Answer) => {
        const randomIndex = Math.floor(Math.random() * ANSWERS.length);
        const cpuChoice = ANSWERS[randomIndex];


        setCpuAnswer(cpuChoice);

        if (choice === cpuChoice) { // Empate
            setStatus(STATUS.DRAW);
            return;
        }

        if (choice === ANSWERS[2] && cpuChoice === ANSWERS[0]) { // Tijera > Papel
            setStatus(STATUS.WIN);
            return;
        }

        if (choice === ANSWERS[1] && cpuChoice === ANSWERS[2]) { // Piedra > Tijera
            setStatus(STATUS.WIN);
            return;
        }

        if (choice === ANSWERS[0] && cpuChoice === ANSWERS[1]) { // Papel > Piedra
            setStatus(STATUS.WIN);
            return;
        }

        if (choice === ANSWERS[0] && cpuChoice === ANSWERS[1]) { // Papel > Piedra
            setStatus(STATUS.WIN);
            return;
        }

        setStatus(STATUS.LOSE);
    }, []);

    return {status, cpuAnswer, generateCpuChoice};
} 

export default usePlayGame;