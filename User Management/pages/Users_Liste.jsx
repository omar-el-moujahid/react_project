import { useEffect, useState } from "react"
import UseFetchHock from "../Uncluding/UseFetchHock"
import { unstable_HistoryRouter } from "react-router-dom"
import Displaymessageupdate from "./Update"
export default function Users_Liste(){
   const [update , setupdate]=useState(false)
   const [Delete , setdelete]=useState(false)
   let [users,loading,fetchData] = UseFetchHock('http://localhost:8000/User')
   const [userId , setuserId]=useState()

   const handelclickupdate =(userId,e)=>{
        e.preventDefault()
        setupdate(true)
        setuserId(userId)
        console.log(userId)
        
   }
   const handelclickdelete = (userId,e)=>{
    e.preventDefault()
    console.log(userId)
    setdelete(true)
    setuserId(userId)
}
    const display=()=>{
        if(loading===true){
            console.log('im in loading')
            return <>
            <tr> <td colSpan={4}  > loading in progress </td> </tr>
            </>
        }
        if (users.length === 0) {
            console.log('im in no items')
            return <>
            <tr> <td colSpan={4}  > No items found </td> </tr>
            </>
        }
        console.log('so what')
        return users.map((user ,key )=>{
            return(
            <tr key={key}> 
                <td  > {user.id} </td>
                <td> {user.Full_Name} </td>
                <td> {user.Country} </td>
                <td> 
                    <button
                        type="button"
                        className="btn btn-primary m-1"
                        onClick={(e)=>handelclickupdate(user.id , e)}
                    >
                        Update
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger m-1"
                        onClick={(e)=>handelclickdelete(user.id , e)}
                    >
                        Delete
                    </button>
                    
                 </td>
             </tr>)
          })
        } 
        
    

    const displaytable=()=>{
        return(
            <>
            <h1> 
                    Users
            </h1>
           
            <div
            className="container-fluid"
        >
            <div
                className="table-responsive-sm"
            >
                <table
                    className="table"
                >
                    <thead className="table table-primary" >
                        <tr>
                           <th scope="col">ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {display()}
                    </tbody>
                </table>
            </div>
            
         </div>
        </>
        )
    }
    const displaymessagedelete=()=>{
        return <>
         <h1> 
                    Do you want to delete this user ?
        </h1>
        <div
            className="alert alert-danger"
            role="alert"
        >
            <strong>Danger</strong> Delation is irreversible you can't go back 
        </div>
        <button
            type="button"
            className="btn btn-danger"
            onClick={()=>deleteuser()}
        >
            Delete
        </button >
        
        </>
       
        
    }

    
    const deleteuser =async ()=>{
        try {
            const response = await fetch(`http://localhost:8000/User/${userId}`, {
              method: 'DELETE'
            });
      
            if (!response.ok) {
                console.error('Failed to delete user');
            } 
          } catch (error) {
            console.error('Error:', error);
          }
        setdelete(false)

    }
    const handelupdate = (value)=> {
        setupdate(!value)
        
    }
    useEffect(()=>{
        fetchData();
        console.log(update)
    },[Delete,update])
    
    return(
        <>
            {Delete ? displaymessagedelete() : update ? <Displaymessageupdate
            userID={userId}
            onUpdate={handelupdate}
            ></Displaymessageupdate> :displaytable() }
        </>
    );
}
