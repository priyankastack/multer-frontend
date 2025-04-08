import  React from 'react';
import { createContext,useState } from 'react';



 export const ImageContext=createContext();


const ImageProvider=({children})=>{

 const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);

 

  const ShowImg = async () => {
    setLoading(true);
  try {
    const response = await fetch("http://localhost:3000/api/getimages", {
      method: "GET",
    });
    const result = await response.json();
    if (!response.ok) {
      return alert(result.message);
    } else {
     setLoading(false);
      alert(result.message);
      setData(result.data);
    }
  } catch (error) {
    console.log(error);
  }
  finally{
    setLoading(false);
  }
};

const contextData={
    data,
    setData,
    loading,
    setLoading,
    ShowImg,
  }


    return(
        <ImageContext.Provider value={contextData}>
            {children}
        </ImageContext.Provider>
    )

}


export default ImageProvider;