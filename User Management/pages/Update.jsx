import { useEffect , useRef, useState } from "react"
import UseFetchHock from "../Uncluding/UseFetchHock"
import FetchtUpdate from "../Uncluding/FetchUpdate";
export default function Displaymessageupdate({userID,onUpdate}){
    let [users,loading,fetchData] = UseFetchHock('http://localhost:8000/User')
    const [fullName, setFullName] = useState('');
    const [update , setupdate] = useState(false)
    const Fullnamefromref = useRef()
    const countryfromref = useRef()
  const getValues = () => {
    if (users.length > 0) {
      const user = users.find(user => user.id === userID);
      if (user) {
        setFullName(user.Full_Name);
      }
    }
  };

  useEffect(() => {
    getValues();
    Fullnamefromref.current.value=fullName
  }, [users, userID]);

  const handleChange=(e)=>{
    e.preventDefault();
    /* const name=Fullname.current.value
    const countries= country.current.value */
    const name=Fullnamefromref.current.value
    const contries=countryfromref.current.value
    const isit = FetchtUpdate(`http://localhost:8000/User/${userID}`,name,contries)
        FetchtUpdate(`http://localhost:8000/User/${userID}`, name, contries)
        .then(result => {
            console.log(result); // true or false
            return onUpdate(result)
        })
        .catch(error => {
            console.error(error);
        });
  }
    return(
        <>
        <h1> Update User </h1>
        <form onSubmit={handleChange} >
        <div className="form-group row mt-2">
            <label htmlFor="id" className="col-sm-2 col-form-label">Current ID</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="id" readOnly value={userID}  />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="full_name" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="full_name" ref={Fullnamefromref} />
            </div>
        </div>
        <div className="form-group row mt-2">
        <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
        <div className="col-sm-10">
            <select id="inputState" className="form-select" aria-label=".form-select-lg example" defaultValue="Mo" ref={countryfromref} >
              <option value="Mo">Morocco</option>
              <option value="Al">Algeria</option>
              <option value="Tu">Tunisia</option>
            </select>
          </div>
        </div>
        <input type="submit" value="Update User" className="form-control btn btn-primary w-100 mt-2"  />
 
        </form>
        </>
    );
}