import React from 'react'
import {useState,useEffect} from 'react';



function Card({name,flag}) {
  return (
    <div
        style={{
            display:"flex",
            flexDirection:"column",
            border:"1px solid grey",
            height:"200px",
            width:"200px",
            borderRadius:"10px",
            gap:"10px",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            margin:"10px"
        }}
    >
        <img src={flag} alt={`flag of ${name}`}  style={{width:"120px",height:"120px"}}/>
        <h3>{name}</h3>


    </div>
  )
}


const Endpoint="https://xcountries-backend.azurewebsites.net/all";



function Countries() {

    const [apiData,setApiData]= useState([]);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch(Endpoint).then(response=>response.json()).then((data)=>
            setApiData(data)
        ).catch((error)=>{
            console.log("Error fetching data: ",error);
            setError(error);
            }
        )
    },[])

    if (error) {
        return <div>{error}</div>; // Render error message
      }



  return (
    <div
        style={{
            display:"flex",
            flexWrap:"wrap",
            margin:"10px",
            justifyContent:"center"
        }}
    >
       {apiData.map(({name,flag},index)=>
       (<Card key={index} name={name} flag={flag}/>)
    )}
    </div>
  );
}

export default Countries