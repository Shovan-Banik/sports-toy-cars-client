import { Link } from "react-router-dom";

const ToyRow = ({ singleToy,index }) => {
    const serial=index+1;
    const { _id,image, sellerName, price, subCategory, name, availableQuantity } = singleToy;
    return (
        <tr>
            <td>{serial}</td>
            <td>
                <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
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