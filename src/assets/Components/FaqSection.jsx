import React from "react";

export default function FaqSection({ v, i, Status, setStatus }) {


  const nethandler=(id)=>{
if(Status === id ){
  setStatus(null);

}else{
  setStatus(id);
}
  }

  
  return (
    <>
      <div className="w-[100%] bg-black">
        <div className="max-w-[1170px] py-1  mx-auto">
          <div className="text-white text-[24px] ">
          <div className=" p-4 mt-1  bg-[#414141] "onClick={()=>nethandler(v.id)}>
                      <p>{v.id}{v.question}</p>
                    </div>
                    <div className="p-4 mt-1 bg-[#414141]" style= {{display:`${(v.id==Status)?"block":"none"}`}}>
                      <p>{v.answer}</p>
                    </div>
            </div>
          </div>
        </div>
     
    </>
  );
}
