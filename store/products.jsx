export default function Products({product},{key}){
   /*  console.log('he from product')
    console.log(product.id) */
    return (
        <tr key={key}>
            <td >{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td> <img src={product.image} alt="" width='100%' /> </td>
            <td> <span
                className="badge bg-primary">
                {product.rating.rate}/5
                </span >
            
                </td>
        </tr>);
}

/* export default function Products({ product }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img src={product.image} alt={product.title} width='100%' /></td>
            <td>{product.rating.rate}</td>
        </tr>
    );
} */
