import { Link } from "react-router-dom";

const ToyRow = ({singleToy}) => {
    
    const{_id,sellerName,price,subCategory,name,availableQuantity}=singleToy;
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td><Link to={`/viewDetails/${_id}`}><button className="btn-sm btn-primary rounded">view Details</button></Link></td>
        </tr>
    );
};

export default ToyRow;