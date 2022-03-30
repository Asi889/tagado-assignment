
import { VictoryChart, VictoryBar, VictorySharedEvents } from "victory";

export default function Terms(props) {
    const { selectedType, allTerms } = props;

    const sharedAxisStyles = {
        tickLabels: {
          fontSize: 13
        },
        axisLabel: {
          padding: 39,
          fontSize: 13,
          fontStyle: "italic"
        }
      };
    return (
        <div className="border-black border-2 mx-auto rounded-md px-10 py-4 mt-[2%] max-h-[380px] min-w-[300px] max-w-[500px]  overflow-auto">
            <h1 className="text-xl font-bold border-b-2 text-center border-black pb-1">Type #{selectedType.type}</h1>
            <div className="pt-3 mt-3">
                
                {/* <VictorySharedEvents> */}

                <VictoryChart domainPadding={{ x: 20 }} animate={{duration: 500}}>
                    <VictoryBar data={allTerms ? allTerms : []} x="name" y="amount" />
                </VictoryChart>
                {/* </VictorySharedEvents> */}
            </div>
            
        </div>
    )
}
