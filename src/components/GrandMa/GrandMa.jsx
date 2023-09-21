import { createContext } from "react";
import Aunti from "../Aunti/Aunti";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const GiftContext=createContext()
const GrandMa = () => {
    return (
        <div>

            <div className="border-2 border-red-500">
                <h2 className="text-center p-4">GrandMa</h2>
        
                   <GiftContext.Provider value="Gold">
                <div className="grid grid-cols-3">
                   <Dad/>
                    <Uncle />
                    <Aunti />
                </div>
                   </GiftContext.Provider>
            </div>

        </div>
    );
};

export default GrandMa;