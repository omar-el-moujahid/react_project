import { useEffect, useRef, useState } from "react";
/* import { useHistory } from "react-router-dom";
 */
export default function Add_User(){
    const [id,setid] = useState(null);
    const full_name = useRef()
    const country = useRef()
    const [it_add , setit_add] = useState(false)
/*     const history = useHistory();
 */    const add_to_the_json =  async function(full_name,country){
       let reponse = await fetch('http://localhost:8000/User',{
            method:`POST`,
            body: JSON.stringify({
                Full_Name : full_name,
                Country :country,

            })
        })
        if(reponse.ok){
            setit_add(true)
        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('handleSubmit neing called')
        add_to_the_json(full_name.current.value,country.current.value)
    }
    useEffect(()=>{
        console.log('test')
        fetch('http://localhost:8000/User').then(resp => resp.json()).then((users)=>{
            if (users.length > 0) {
                users.map((user)=>{
                    setid(user.id)
                 })
            }
               
        })
    },[])
   
    useEffect(()=>{
        console.log(id)
        console.log(it_add)
        if(it_add){
/*             history.push("/");
 */        }
    },[id,it_add])
    return(
        <>
        <h1> Add User </h1>
        <form onSubmit={handleSubmit} >
        <div className="form-group row mt-2">
            <label htmlFor="id" className="col-sm-2 col-form-label">Current ID</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="id" readOnly value={id} />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="full_name" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="full_name" ref={full_name} />
            </div>
        </div>
        <div className="form-group row mt-2">
        <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
        <div className="col-sm-10">
            <select id="inputState" className="form-select" aria-label=".form-select-lg example" defaultValue="Mo" ref={country}>
              <option value="Mo">Morocco</option>
              <option value="Al">Algeria</option>
              <option value="Tu">Tunisia</option>
            </select>
          </div>
        </div>
        <input type="submit" value="Add User" className="form-control btn btn-primary w-100 mt-2"  />
 
        </form>
        </>
    );
}