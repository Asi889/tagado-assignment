import Terms from "./Terms";
import Types from "./Types";


export default function AllTypes(props) {
    const { allTypes, setType, selectedType, termsFlag, allTerms } = props;
    return (
        <div className="">
            <Types allTypes={allTypes} setType={setType} selectedType={selectedType} />
            {termsFlag ? <Terms selectedType={selectedType} allTerms={allTerms} /> : ""}

        </div>
    )
}
