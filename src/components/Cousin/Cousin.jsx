import { useContext } from "react";
import { GiftContext } from "../GrandMa/GrandMa";

const Cousin = () => {
    const cousinGift=useContext(GiftContext)
    return (
        <div>
            <div>
                <h2 className="border-2 border-red-500 text-center">Cousin</h2>
                <p className="text-center">{cousinGift}</p>
            </div>
        </div>
    );
};

export default Cousin;