import { useEffect, useState } from "react";
import Bar from "../components/Bar";
import axios from "axios"
import ToggleTypes from "../components/ToggleTypes";

export default function Home({ list }) {

  const [allTypes, setAllTypes] = useState([]);
  const [selectedType, setSelectedType] = useState({});
  const [termsFlag, setTermsFlag] = useState(false);
  const [toggleFlag, setToggleFlag] = useState("");
  const [allTerms, setAllTerms] = useState([])

  const getAllTypes = async () => {
    const typesData = await axios.get(`http://localhost:3009/all-types`)
    setAllTypes(typesData?.data)
  }

  const setType = async (typeIn) => {

    // const getType = await axios.post('http://localhost:3009/get-type', { id: typeIn._id })
    setTermsFlag(!termsFlag)
    // if (getType.data) {
    //   setSelectedType(getType.data)
    // }
    const currentTypes = allTypes.filter(t => t.type === typeIn.type);
    const allTheTerms = currentTypes.map((type) => type.terms.map((term) => term)).flat();
    const termsResultNew = allTheTerms.reduce((prev, current)=>{
         console.log(current);
        const obj = prev.find(term =>term.name === current );
        if(obj){
          obj.amount++
        } else{
          prev.push({
            name:current,
            amount:1
          })
        }
        return prev
    },[])
    
    setAllTerms(termsResultNew);
  }

  const addNewType = (newType) => {
    setAllTypes([...allTypes, newType])
  }

  useEffect(() => {
    setAllTypes(list)
  }, [])


  return (
    <div className="w-full h-full flex flex-col justify-center">

      <Bar getAllTypes={getAllTypes} setToggleFlag={setToggleFlag} />
      <ToggleTypes toggleFlag={toggleFlag} allTypes={allTypes} setType={setType} selectedType={selectedType} termsFlag={termsFlag} setAllTypes={setAllTypes} addNewType={addNewType} allTerms={allTerms} />

    </div>
  )
}

export async function getServerSideProps(req) {
  const typesData = await axios.get(`http://localhost:3009/all-types`)
  const allTypes = { list: typesData.data }
  return {
    props: allTypes

  };
}
