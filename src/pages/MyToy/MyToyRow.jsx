import { Link } from "react-router-dom";

const MyToyRow = ({myToy,index,handleDelete}) => {
    const{_id,image,sellerName,price,subCategory,name,availableQuantity}=myToy;
    const serial=index+1;

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
            <td><Link to={`/updateToy/${_id}`}><button className="btn-sm btn-primary rounded">Update</button>
            </Link></td>
            <td><Link><button onClick={()=>handleDelete(_id)} className="btn-sm btn-primary rounded">Delete</button>
            </Link></td>
        </tr>
    );
};

export default MyToyRow;