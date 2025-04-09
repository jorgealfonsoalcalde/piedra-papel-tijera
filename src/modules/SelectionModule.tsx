import { Choice } from "../components/Choice";
import { ANSWERS } from "../constants/answers"
import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import { Answer } from "../types/answer"

const SelectionModule = () => {
    /*const [setChoice, setStep] = useGameStore(state => [state.setChoice, state.setStep]); -> DABA ERROR (BUCLE INFINITO) POR LA VERSIÓN DE ZUSTAND, CAMBIO SUGERIDO EN LOS COMENTARIOS DEL CURSO:*/
    const setChoice = useGameStore(state => state.setChoice);
    const setStep = useGameStore(state => state.setStep);

    const onClickChoice = (choice: Answer) => {
        setChoice(choice);
        setStep(STEPS.PLAY);
    }
    
    return (
        <div className="flex row justify-around">
            {ANSWERS.map((answer) => <Choice choice={answer} onClick={onClickChoice} key={answer} />)}
        </div>
    )
}
export default SelectionModule;