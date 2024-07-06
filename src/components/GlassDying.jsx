import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const GlassDying = () => {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        fetch('https://artistry-craft-server-1.onrender.com/craft')
            .then(res => res.json())
            .then(data => {
                const scrapBooking = data.filter(item => item.category === 'Glass Dying & Staining');
                setCat(scrapBooking);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
            {cat.map(item => (
                <div key={item._id} className="p-6 rounded-md shadow-lg dark:bg-gray-50 dark:text-gray-900 hover:scale-105 transition-all duration-1000 hover:bg-gray-300 border-2">
                    <img src={item.photo} alt={item.itemName} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <h2 className="text-xl text-center font-semibold tracking-wide">{item.itemName}</h2>
                    </div>
                    <p className="dark:text-gray-800 text-center">{item.category}</p>
                    <div className="mt-1 mb-2 flex items-center gap-3 justify-center text-md text-gray-500 font-semibold">
                        <ReactStars
                            count={5}
                            value={item.rating}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            isHalf={true}
                        />
                        {item.rating}
                    </div>
                    <p className="text-gray-600 font-bold text-center">${item.price}</p>
                    <div className="flex items-center justify-center text-center w-full">
                        <Link to={`/craft/${item._id}`} className="btn btn-wide mt-3 w-full bg-[#23BE0A] text-white">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default GlassDying;