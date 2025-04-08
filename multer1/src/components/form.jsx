import React ,{useContext, useState} from 'react';
import { ImageContext } from '../../../context/context';



const Form=()=>{

  const{ShowImg}=useContext(ImageContext);
    const [image,setImage]=useState([]);
    const [data,setData]=useState("");
    const submitHandler=async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image); 
     try {
      const response=await fetch("https://multer-backend-neon.vercel.app/api/post",{
        method:"POST",
        body: formData,
      });
      const result=await response.json();
      if(!response.ok){
       return alert(result.message);
      }
      else{
        alert(result.message);
        setData(result.data);
        console.log(result.data);
        ShowImg();
        setImage("");
      }
    
    } 
    catch (error) {
     return  console.log(error.message);
     }
    
    }



    return(
        <>
<div className="bg-white p-8 rounded shadow-md w-full max-w-md  flex flex-col place-self-center mt-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Upload File</h2>

    <form method="POST" encType="multipart/form-data" onSubmit={(e)=>submitHandler(e)}>
      <div className="mb-4">
        <label  className="block text-gray-700 font-semibold mb-2">Choose file:</label>
        <input
        name='image'
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Upload
      </button>
    </form>
  </div>
        </>
    )
}



export default Form;