import React, { useState, useEffect, useContext } from "react";
import { ImageContext } from "../../../context/context";

const Images = () => {
    const{data,loading,ShowImg}=useContext(ImageContext);
 
  useEffect(() => {
    ShowImg();
  }, []);

  return (
    <>
    <div className=" grid grid-cols-4 gap-4 mt-10 justify-center items-center ">
        {loading?<p className="text-xl text-amber-50 font-bold ">Loading...</p>:null}
        {data?(data.map((ele)=>{
            return(
                <div key={ele._id} className="place-items-center">
                <img src={ele.url}  alt="uploaded-img" className="h-40"/>
            </div>
            )
        })):(<p>No Data found.</p>)}
    </div>
    </>
  );
};

export default Images;
