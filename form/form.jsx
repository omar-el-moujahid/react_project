import { useEffect, useReducer, useRef, useState } from "react"
import { FormReducer, formreducervalue } from "./fromreducer"

export default function Form(){
    const name=useRef()
    const age=useRef()
    const check=useRef()
    let values ={}
    const [formvalues,setformvalues]=useState(formreducervalue)
    const [FormWithReduce,setFormWithReduce]=useReducer(FormReducer ,formreducervalue )
    const handelsubmit = ()=>{
        setFormWithReduce({type:'INPUT_Name',payload:name})
        setFormWithReduce({type:'INPUT_Age',payload:age})
        setFormWithReduce({type:'CHECK',payload:check})
        setformvalues({})
        setformvalues({
            name: name.current.value,
            age: age.current.value,
            check: check.current.checked
          });
     }
   
        useEffect(()=>{
            name.current.value="name"
            age.current.value="000"
            name.current.focus()
        },[])
        useEffect(() => {
//            console.log(formvalues);
            console.log(FormWithReduce);
          }, [formvalues,FormWithReduce]);
    return <form>
        {console.log(FormWithReduce)}
        <div className="container">
        <div className="form-group my-4">
        <label htmlFor="name">name</label>
        <input type="text" id="name" className="form-control" ref={name} />
        </div>
        <div>
        <label htmlFor="age">age</label>
        <input type="number" id="age" className="form-control"  ref={age} />
        </div>
        <div className="form-check my-3 ">
        <label htmlFor="accept" className="form-check-label ms-2">   agree?     </label>
        <input className="form-check-input form-control  " type="checkbox" value="" id="accept" ref={check} />
        </div>
        <input type="submit" value="submit" className="btn btn-primary my-3 " onClick={
            (e)=>{
                e.preventDefault()
                handelsubmit()
            }
        }  />
        </div>
        
        
    </form>
}