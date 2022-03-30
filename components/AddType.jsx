import { useState } from "react";
import axios from "axios";

export default function AddType(props) {
    const { setAllTypes, allTypes } = props;
    const [term, setTerm] = useState("");
    const [allTerms, setAllTerms] = useState([]);
    const [typeNumber, setTypeNumber] = useState("");
    const [newType, setNewType] = useState("");

    const addTerm = (e) => {
        setNewType({ type: typeNumber, terms: [...allTerms, term] })
        setAllTerms([...allTerms, term])
        setTerm("")
    };

    const addType1 = async () => {
        await axios.post('http://localhost:3009/newType', newType)
        setAllTypes([...allTypes, newType])
    }

    return (
        <div className="border-black rounded-md border-2 mx-auto px-10 py-4 mt-[10%] max-h-[300px] min-w-[300px] max-w-[650px] overflow-auto">
            <h1 className="text-xl font-bold border-b-2 text-center border-black pb-1">Add New Type</h1>
            <div className="pt-4">
                <div className="pt-4 text-xl flex gap-3">
                    <h1>Type number:</h1>
                    <input className=" border-gray-200 border-b-2" type="number" onChange={(e) => setTypeNumber(e.target.value)} placeholder="#" value={typeNumber} />
                </div>

                <div className=" pt-4 text-xl flex gap-x-3 items-center">
                    <h1>Add each term then </h1>
                    <input className=" border-gray-200 border-b-2" type="text" placeholder="enter term" onChange={(e) => setTerm(e.target.value)} value={term} />
                    <button className="bg-red-300 hover:opacity-75 transition text-white font-bold px-2 py-2 rounded-full" onClick={addTerm}>add term</button>
                </div>
                <div className="flex gap-x-3 items-end">
                    <h1 className="text-xl">Terms:</h1>
                    {allTerms?.map((term, index) => <h1 key={index}>{term}</h1>)}
                </div>

                <div className="w-full h-[2px] mt-4 bg-black"></div>
                <button className="bg-green-300 hover:opacity-75 transition text-white font-bold px-2 py-2 rounded-full w-full mt-4 text-xl" onClick={addType1}>Add</button>
            </div>
        </div>
    )
}
