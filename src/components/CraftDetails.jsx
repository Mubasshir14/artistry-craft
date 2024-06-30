import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
const CraftDetails = () => {
    const { id } = useParams();
    const [craft, setCraft] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/craft/${id}`)
            .then(res => res.json())
            .then(data => setCraft(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!craft) {
        return <span className="loading loading-bars text-green loading-lg"></span>;
    }

    return (
        <div className='mt-6  rounded-xl shadow-xl shadow-green-400/30'>
            <div className="max-w-screen-xl mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={craft.photo} alt="" className="block object-cover object-center h-[500px] w-full rounded-md  dark:bg-gray-500" />
                    </div>
                    <div className="space-y-4 pl-5">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-3xl text-[#23BE0A] font-semibold dark:text-violet-600">{craft.itemName}</h3>
                        </a>
                        <p className="text-lg  font-semibold dark:text-violet-600">
                            {/* <span className='text-xl font-bold text-gray-500'>Price: </span>$ */}
                            ${craft.price}</p>
                        <p className="text-lg font-semibold dark:text-violet-600">
                            {/* <span className='text-xl font-bold text-gray-500'>Description: </span> */}
                            {craft.description}</p>
                        <div className="mt-1 mb-2 flex items-center gap-3  text-md text-gray-500  font-semibold">
                            <ReactStars
                                count={5}
                                value={craft.rating}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                                isHalf={true}
                            />
                            {craft.rating}
                        </div>
                        <p className="text-lg font-semibold dark:text-violet-600">
                            <span className='text-xl font-bold text-gray-500'>Processing Time: </span>
                            {craft.time}</p>
                        <p className="text-lg font-semibold dark:text-violet-600">
                            <span className='text-xl font-bold text-gray-500'>Stock Status: </span>
                            {craft.stock}</p>
                        <p className="text-lg font-semibold dark:text-violet-600">
                            <span className='text-xl font-bold text-gray-500'>Customization: </span>
                            {craft.customization}</p>
                        <p className="text-lg font-semibold dark:text-violet-600">
                            <span className='text-xl font-bold text-gray-500'>Category: </span>
                            {craft.category}</p>
                        <p className="text-md font-semibold dark:text-violet-600 text-[#23BE0A]">
                            <span className='text-md  font-bold text-gray-500'>Owner Name: </span>
                            {craft.name}</p>
                        <p className="text-md font-semibold text-[#23BE0A]">
                            <span className='text-md  font-bold text-gray-500 '>Owner Email: </span>
                            {craft.email}</p>
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    );
};

export default CraftDetails;
