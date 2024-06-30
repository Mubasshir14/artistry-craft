
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {
    const { _id, itemName, photo, category, price, rating } = craft;
    
    // const handleView = id => {
    //     console.log(id);
    // }
    return (
        <div>
            <div className=" p-6 rounded-md shadow-lg dark:bg-gray-50 dark:text-gray-900 hover:scale-105 transition-all duration-1000 hover:bg-gray-300 border-2 ">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl text-center font-semibold tracking-wide">{itemName}</h2>
                </div>
                <p className="dark:text-gray-800 text-center">{category}</p>
                <div className="mt-1 mb-2 flex items-center gap-3 justify-center text-md text-gray-500  font-semibold">
                    <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                        isHalf={true}
                    />
                    {rating}
                </div>
                <p className="text-gray-600 font-bold text-center">${price}</p>
                <div className='flex items-center justify-center text-center w-full'>
                <Link to={`/craft/${_id}`}
                // onClick={() => handleView(_id)} 
                className='btn btn-wide mt-3 w-full  bg-[#23BE0A] text-white'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;
