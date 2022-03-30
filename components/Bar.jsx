

export default function Bar(props) {
    const {setToggleFlag, getAllTypes} = props;
    const handleCLick=()=>{
        getAllTypes()
        setToggleFlag("home")
    }
    return (
      <div className="w-screen h-10 bg-blue-600">
        <div className="flex gap-x-5 px-2 py-2 font-bold text-white">
            <button onClick={handleCLick} className="">HOME</button>
            <h1>|</h1>
            <button onClick={()=>setToggleFlag("add")} className="">ADD TYPE</button>


        </div>
      </div>
    )
  }
  