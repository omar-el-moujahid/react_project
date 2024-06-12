import { useEffect, useState } from "react";
import Products from "./products";
import UseFetchHock from "../../Hock/usefetch";
export default function Productsliste(){
    const [productsliste,setproducutlist]=useState([])
    const [search,setsearch]=useState("")
    const [categoriesliste,setcategoriestlist]=useState([])
    const [fletre,setfletre]=useState('')
    const [productsfromhock,errorsfproductromhock]=UseFetchHock('https://fakestoreapi.com/products')
    const [categoriesfromhock,errorscategoriesfromhock]=UseFetchHock('https://fakestoreapi.com/products/categories')
    const getproducts = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(resp=>resp.json()).then(result=> {
            setproducutlist(()=>{
                return [...result];
            })
        })
        }

     const getcategories = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(resp=>resp.json()).then(result=> {
            setcategoriestlist(()=>{
                return [...result];
            })
        })
        }

        const handleCategoryClick = ( category) => {
            setfletre(category)
        }; 

    useEffect(()=>{
        getproducts()
        getcategories()
    },[])

    useEffect(()=>{
        displaytable();
    },[fletre,search])
    
    
    const displaytable=()=>{
        let productstemp = productsfromhock;
        productstemp = productsfromhock.filter((product) =>{
            if(fletre===''){
                return product.title.toLowerCase().includes(search.toLowerCase()) ||
                product.id.toString().startsWith(search.trim()) ||
                product.description.toLowerCase().includes(search.trim().toLowerCase())            
             }
            return ( (product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.id.toString().startsWith(search.trim()) ||
            product.description.toLowerCase().includes(search.trim().toLowerCase()) )
             && (product.category===fletre) )

            });       
        if(productstemp.length===0){
            return ( 
            <tr>
                    <td colSpan={7}>No items</td>
            </tr>);
        }
        else{
                return productstemp.map((product,key)=>{
                   return <Products product={product} key={key}/>
                })
          
        }
        
    }
    const displaycategoties = ()=>{
//        console.log(categoriesliste)
        return categoriesliste.map((category,key)=>{
            return (<button className="btn btn-secondary" onClick={() => handleCategoryClick(category)} key={key} >
                {category}
            </button>)
        })
    }
    const handesearch = (e)=>{
        e.preventDefault()
        const input = document.querySelector('#search').value
        setsearch(input)
    }
    return (
        <div className="container-fluix mx-auto w-75 my-3" >
                    <h2> Search</h2>
                    <form >
                        <div className="mb-3">
                                <label  className="form-label">Search</label>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    className="form-control"
                                    width='50%'
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                                <input type="submit" value="Search" className="btn btn-primary mt-4" onClick={handesearch} />
                        </div>
                     </form>
                     <h5>categories: </h5>
                     <div className="btn-group"> 
                        {displaycategoties()}
                     </div>
            <h1>liste des produits: </h1>
            <div
            >
                <table
                    className="table "
                >
                    <thead className="table table-primary " >
                        <tr>
                            <th> ID </th>
                            <th> Titel</th>
                            <th> Prise </th>
                            <th> Description </th>
                            <th> Categories </th>
                            <th> Image </th>
                            <th> Rating </th>

                        </tr>
                    </thead>
                    <tbody>
                    {displaytable()}
                    </tbody>
                </table>
            </div>
            
       </div>
    );
}