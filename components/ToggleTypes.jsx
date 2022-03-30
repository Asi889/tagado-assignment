import AddType from "./AddType"
import AllTypes from "./AllTypes"


export default function ToggleTypes(props) {
    const { allTypes, setType, selectedType, toggleFlag, termsFlag, setAllTypes, addNewType, allTerms } = props
    return (
        <div className="">
            {
                toggleFlag === "add"
                    ?
                    <AddType setAllTypes={setAllTypes} addNewType={addNewType} allTypes={allTypes} />
                    :
                    <AllTypes allTypes={allTypes} setType={setType} selectedType={selectedType} termsFlag={termsFlag} allTerms={allTerms} />
            }
        </div>
    )
}
