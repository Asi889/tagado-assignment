import { useState } from "react";

export default function Types(props) {
    const { allTypes, setType } = props;
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="border-black rounded-md border-2 mx-auto px-10 py-4 mt-[5%] max-h-[500px] min-w-[300px] max-w-[500px] ">
            <div onClick={()=>setIsOpen(!isOpen)} className="flex gap-x-3 border-b-2 justify-between cursor-pointer">

                <h1 className="text-xl font-bold  text-center border-black pb-1">All Types</h1>
                <div className={`text-2xl font-bold ${isOpen ? 'rotate-90 transition':''}`}>{">"}</div>
            </div>
            <div className="max-h-[250px] overflow-auto">

            {allTypes?.map((type,index) => {
                return (
                    <div key={index} className={` items-center  ${isOpen ? "flex gap-x-8" : "hidden"} justify-between`}>
                        <div className=" text-xl">type: {type.type}</div>
                        <div className="grid">
                            <button onClick={() => setType(type)}
                                className="text-4xl mb-[10px] text-red-400 font-black   hover:opacity-75 transition">
                                +
                            </button>
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
    )
}
