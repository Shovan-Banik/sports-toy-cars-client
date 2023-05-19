
const ToyRow = ({singleToy}) => {
    
    const{sellerName,price,subCategory,name,availableQuantity}=singleToy;
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td><button className="btn-sm btn-primary rounded">view Details</button></td>
        </tr>
    );
};

export default ToyRow;