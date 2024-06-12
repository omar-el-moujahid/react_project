import { useEffect, useState } from "react"

 const  UseFetchHock =(url , initilaval=[])=>{
    console.log("im being called")
    const [data, setdata]=useState(initilaval)
    const [errors, setErrors]=useState(undefined)
    /* fetch(url).then((resp)=>{
        if(resp.ok){
            return resp.json()
        }
        else {
            return Promise.reject("Network response was not ok");
        }
    }).then((result) => {
        setProducts(() => [...result]);
    })
    .catch((error) => setErrors(error)); */

    const setitems=()=>{
        fetch('https://fakestoreapi.com/products')
    .then(resp=>resp.json()).then(result=> {
        setdata(()=>{
            return [...result];
        })
    })
}
    
        return [data];
}

export default UseFetchHock