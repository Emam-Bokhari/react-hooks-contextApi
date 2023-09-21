import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <div className="border-2 border-green-500">
                <h2 className="text-center p-2 border-2 border-black">Dad</h2>

                <div className="grid grid-cols-3 mt-5">
                    <MySelf />
                    <Brother />
                    <Sister />
                </div>

            </div>
        </div>
    );
};

export default Dad;