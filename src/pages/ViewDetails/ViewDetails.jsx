import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ViewDetails = () => {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState({});
    const { image, name, description, price, rating, subCategory,availableQuantity } = detailsData;
    useTitle('ViewDetails');

    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetailsData(data)
            })
    }, [id])

    const renderRatingStars = () => {
        const stars = [];
        const roundedRating = Math.round(rating * 10) / 10;
      
        for (let i = 1; i <= 5; i++) {
          const starClass =
            i <= roundedRating
              ? 'text-yellow-500'
              : i - 0.5 === roundedRating
              ? 'text-yellow-500'
              : 'text-gray-300';
          stars.push(<span key={i} className={starClass}>&#9733;</span>);
        }
      
        return stars;
      };
      

    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-12 text-blue-800">View Details Of: {name}</h2>
            <div className="card lg:card-side bg-base-100 shadow-2xl md:w-3/4 mx-auto  border-2 border-blue-800 p-4">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body space-y-0">
                    <p className="font-bold text-blue-800">Sub-Category: {subCategory}</p>
                    <p><span className="font-bold text-blue-800">Price:</span> {price}</p>
                    <p><span className="font-bold text-blue-800">Rating:</span> {renderRatingStars()}</p>
                    <p><span className="font-bold text-blue-800">Available Quantity:</span> {availableQuantity}</p>
                    <p><span className="font-bold text-blue-800">Description:</span> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;