import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <div className="border-2 border-orange-500">
            <h2 className="text-center p-2 border-2 border-black">Uncle</h2>
            
            <div className="mt-5">
                <Cousin/>
            </div>

            </div>
        </div>
    );
};

export default Uncle;