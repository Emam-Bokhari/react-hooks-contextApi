import { useContext } from "react";
import { GiftContext } from "../GrandMa/GrandMa";

const MyWife = () => {
    const gift=useContext(GiftContext)
    return (
        <div>
            <div>
            <h2>MyWife</h2>
            <p>{gift}</p>
            </div>
        </div>
    );
};

export default MyWife;