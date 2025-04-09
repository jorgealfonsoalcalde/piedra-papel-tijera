import { STATUS } from "../constants/status";
import { Status } from "../types/status";

interface ResultProps {
    status: Status | null;
}

export const Result: React.FC<ResultProps> = ({ status }) => {
    switch (status) {
        case STATUS.WIN:
            return <h2 className="text-3xl font-bold text-green-500 block text-center">GANASTE!</h2>;
        case STATUS.LOSE:
            return <h2 className="text-3xl font-bold text-red-500 block text-center">PERDISTE!</h2>;
        case STATUS.DRAW:
            return <h2 className="text-3xl font-bold text-yellow-500 block text-center">EMPATASTE!</h2>;
        default:
            return null;
    }
}